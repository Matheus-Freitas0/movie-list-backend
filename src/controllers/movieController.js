const MovieRepository = require('../repositories/movieRepository');

const movieRepository = new MovieRepository()

class movieController {
    async getAllMovies(req, res) {
        try {
            const moviesList = await movieRepository.getAllMovies();
            res.json(moviesList);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createMovie(req, res) {
        const { title, year, director, synopsis, note } = req.body;
        try {
            const newMovie = await movieRepository.createMovies({ title, year, director, synopsis, note});
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = movieController
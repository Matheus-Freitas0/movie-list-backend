const MovieRepository = require('../repositories/movieRepository');

const movieRepository = new MovieRepository()

class movieController {
    async getAllMovies(req, res) {
        try {
            const movie = await movieRepository.getAllMovies();
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = movieController
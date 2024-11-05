const MovieRepository = require('../repositories/movieRepository');

const movieRepository = new MovieRepository()

class movieController {
    async getAllMovies(req, res) {
        try {
            const movies = await movieRepository.getAllMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = movieController
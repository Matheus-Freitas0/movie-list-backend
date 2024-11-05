const MovieRepository = require('../repositories/movieRepository');

class movieController {
    async getAllMovies(req, res) {
        try {
            const movie = await MovieRepository.getAllMovie();
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = movieController
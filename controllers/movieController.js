const MovieRepository = require('../repositories/movieRepository');

class MovieController {
    async getAllMovie(req, res) {
        try {
            const movie = await MovieRepository.getAllMovie();
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default MovieController
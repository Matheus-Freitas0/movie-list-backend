const Movie = require('../models/movie');

class MovieRepository {

    async getAllMovies() {
        try {
            return await Movie.findAll() 
        } catch (error) {
            throw new Error(`Erro ao buscar todos os filmes: ${error.message}`);
        }
    }

}

module.exports = MovieRepository;
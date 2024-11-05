const Movie = require('../models/movie');

class MovieRepository {

    async getAllMovies() {
        try {
            return await Movie.findAll() 
        } catch (error) {
            throw new Error(`Erro ao buscar todos os filmes: ${error.message}`);
        }
    }
    
    async createMovies(MovieData) {
        try {
            return await Movie.create(MovieData);
        } catch (error) {
            throw new Error(`Erro ao criar novo filme: ${error.message}`);
        }
    }

    async getByIdMovie(id) {
        try {
            const movie = await Movie.findByPk(id);
            if (!movie) {
                return null;
            }
            return movie;
        } catch (error) {
            throw new Error(`Erro ao buscar tarefa por id: ${error.message}`);
        }
    }
}

module.exports = MovieRepository;
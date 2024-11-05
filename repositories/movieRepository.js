import Movie from '../models/tarefa';

class MovieRepository{

    async getAllMovies() {
        try {
            return await Movie.findAll()
        } catch (error) {
            throw new Error(`Erro ao buscar todos os filmes: ${error.message}`);
        }
    }
}

export default MovieRepository
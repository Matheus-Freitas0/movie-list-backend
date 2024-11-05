import Movie from '../models/tarefa';

class movieRepository{

    async getAllMovies() {
        try {
            return await Movie.findAll()
        } catch (error) {
            throw new Error(`Erro ao buscar todos os filmes: ${error.message}`);
        }
    }
}

export default movieRepository
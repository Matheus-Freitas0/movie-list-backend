const { Router } = require('express');
const MovieController = require('../controllers/movieController.js');
const router = Router();

const movieController = new MovieController()

router.get('/list', (req, res) => movieController.getAllMovies(req, res));
router.post('/', (req, res) => movieController.createMovie(req, res))

module.exports = router
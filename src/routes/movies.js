const { Router } = require('express');
const MovieController = require('../controllers/movieController.js');
const router = Router();

const movieController = new MovieController()

router.get('/', (req, res) => movieController.getAllMovies(req, res));

module.exports = router
const { Router } = require('express');
const movieController = require('../controllers/movieController');
const router = Router();

router.get('/', (req, res) => movieController.getAllMovies(req, res));

module.exports = router
const express = require('express');
const { createPhoto, getPhotos } = require('../controllers/photoController');
const router = express.Router();

router.post('/', createPhoto);
router.get('/', getPhotos);

module.exports = router;

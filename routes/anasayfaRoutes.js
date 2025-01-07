

const express = require('express');
const router = express.Router();
const anasayfaController = require('../controllers/anasayfaController');

// "/markalar" URL'si ile yozo.html'e yönlendir
router.get('/anasayfa', anasayfaController.showAnasayfaPage);

module.exports = router;

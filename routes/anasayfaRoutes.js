

const express = require('express');
const router = express.Router();
const anasayfaController = require('../controllers/anasayfaController');

router.get('/anasayfa', anasayfaController.showAnasayfaPage);

module.exports = router;

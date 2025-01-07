const express = require('express');
const router = express.Router();
const kampanyaController = require('../controllers/kampanyaController');

// Kampanya verilerini almak için route
router.get('/kampanya-performans', kampanyaController.getKampanyaData);

module.exports = router;

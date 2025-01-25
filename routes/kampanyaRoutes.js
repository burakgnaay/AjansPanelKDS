const express = require('express');
const router = express.Router();
const kampanyaController = require('../controllers/kampanyaController');

router.get('/kampanya-performans', kampanyaController.getKampanyaData);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getEkipkarsilastirmaData } = require('../controllers/ekipkarsilastirmaController');  // Controller'ı dahil et

// Pie chart verisini döndüren route
router.get('/ekipkarsilastirmadata', getEkipkarsilastirmaData);

module.exports = router;

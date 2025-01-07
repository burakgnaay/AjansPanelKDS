const express = require('express');
const router = express.Router();
const { getPieData } = require('../controllers/pieController');  // Controller'ı dahil et

// Pie chart verisini döndüren route
router.get('/piedata', getPieData);

module.exports = router;

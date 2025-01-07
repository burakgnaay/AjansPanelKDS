const express = require('express');
const router = express.Router();
const ekipperformansController = require('../controllers/ekipperformansController');

// Kampanya verilerini almak için route
router.get('/ekip-performans', ekipperformansController.getEkipData);

module.exports = router;

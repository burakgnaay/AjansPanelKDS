const express = require('express');
const router = express.Router();
const ekipperformansController = require('../controllers/ekipperformansController');

router.get('/ekip-performans', ekipperformansController.getEkipData);

module.exports = router;

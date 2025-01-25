const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenueController');

router.get('/totalrevenue', revenueController.getTotalRevenue);

module.exports = router;

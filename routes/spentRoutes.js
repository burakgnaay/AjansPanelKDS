const express = require('express');
const router = express.Router();
const spentController = require('../controllers/spentController');

// Toplam harcama endpoint
router.get('/totalspent', spentController.getTotalSpent);

module.exports = router;

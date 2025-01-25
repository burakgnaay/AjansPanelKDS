const express = require('express');
const router = express.Router();
const spentController = require('../controllers/spentController');

router.get('/totalspent', spentController.getTotalSpent);

module.exports = router;

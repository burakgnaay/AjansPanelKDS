const express = require('express');
const router = express.Router();
const yozoController = require('../controllers/yozoController');

router.get('/yozoUrban', yozoController.showYozoPage);

module.exports = router;

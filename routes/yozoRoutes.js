const express = require('express');
const router = express.Router();
const yozoController = require('../controllers/yozoController');

// "/markalar" URL'si ile yozo.html'e yönlendir
router.get('/yozoUrban', yozoController.showYozoPage);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getTotalMarkasayi } = require('../controllers/markasayiController');

router.get('/totalmarkasayi', getTotalMarkasayi);

module.exports = router;

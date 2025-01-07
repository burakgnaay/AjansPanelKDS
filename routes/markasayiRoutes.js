const express = require('express');
const router = express.Router();
const { getTotalMarkasayi } = require('../controllers/markasayiController');

// Toplam marka sayısı endpoint'i
router.get('/totalmarkasayi', getTotalMarkasayi);

module.exports = router;

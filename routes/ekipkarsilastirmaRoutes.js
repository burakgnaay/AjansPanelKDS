const express = require('express');
const router = express.Router();
const { getEkipkarsilastirmaData } = require('../controllers/ekipkarsilastirmaController');  

router.get('/ekipkarsilastirmadata', getEkipkarsilastirmaData);

module.exports = router;

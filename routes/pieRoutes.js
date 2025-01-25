const express = require('express');
const router = express.Router();
const { getPieData } = require('../controllers/pieController'); 

router.get('/piedata', getPieData);

module.exports = router;

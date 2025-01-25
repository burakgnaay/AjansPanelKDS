const express = require('express');
const router = express.Router();
const odemelerController = require('../controllers/odemelerController'); 

router.get('/odemeler', odemelerController.getOdemeler);

module.exports = router;

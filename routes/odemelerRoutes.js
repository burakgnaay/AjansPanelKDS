const express = require('express');
const router = express.Router();
const odemelerController = require('../controllers/odemelerController'); // doğru yolu belirtiyoruz

// Ödemeler sayfasına yönlendiren route
router.get('/odemeler', odemelerController.getOdemeler);

module.exports = router;

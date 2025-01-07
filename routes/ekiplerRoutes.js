const express = require('express');
const router = express.Router();
const ekiplerController = require('../controllers/ekiplerController'); // doğru yolu belirtiyoruz

// Ekipler sayfasına yönlendiren route
router.get('/ekipler', ekiplerController.getEkipler);

module.exports = router;

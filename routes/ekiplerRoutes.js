const express = require('express');
const router = express.Router();
const ekiplerController = require('../controllers/ekiplerController'); 

router.get('/ekipler', ekiplerController.getEkipler);

module.exports = router;

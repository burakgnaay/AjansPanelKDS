const express = require('express');
const router = express.Router();
const odemebilgiController = require('../controllers/odemebilgiController');

router.get('/odeme-bilgi', odemebilgiController.getOdemebilgiData);

module.exports = router;

// roiRoutes.js
const express = require("express");
const { getPlatformPerformans } = require("../controllers/platformController");

const router = express.Router();

// Burada doğru rota tanımlandığından emin olun
router.get("/platform-performans", getPlatformPerformans);

module.exports = router;

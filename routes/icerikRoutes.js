// roiRoutes.js
const express = require("express");
const { getIcerikPerformans } = require("../controllers/icerikController");

const router = express.Router();

// Burada doğru rota tanımlandığından emin olun
router.get("/icerik-performans", getIcerikPerformans);

module.exports = router;

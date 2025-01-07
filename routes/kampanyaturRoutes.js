// roiRoutes.js
const express = require("express");
const { getKampanyaturPerformans } = require("../controllers/kampanyaturController");

const router = express.Router();

// Burada doğru rota tanımlandığından emin olun
router.get("/kampanyatur-performans", getKampanyaturPerformans);

module.exports = router;

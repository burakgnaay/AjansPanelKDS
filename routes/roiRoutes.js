// roiRoutes.js
const express = require("express");
const { getMonthlyROI } = require("../controllers/roiController");

const router = express.Router();

// Burada doğru rota tanımlandığından emin olun
router.get("/monthly-roi", getMonthlyROI);

module.exports = router;

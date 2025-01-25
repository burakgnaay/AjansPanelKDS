const express = require("express");
const { getMonthlyROI } = require("../controllers/roiController");

const router = express.Router();

router.get("/monthly-roi", getMonthlyROI);

module.exports = router;

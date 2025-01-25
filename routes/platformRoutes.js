const express = require("express");
const { getPlatformPerformans } = require("../controllers/platformController");

const router = express.Router();

router.get("/platform-performans", getPlatformPerformans);

module.exports = router;

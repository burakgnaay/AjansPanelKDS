const express = require("express");
const { getKampanyaturPerformans } = require("../controllers/kampanyaturController");

const router = express.Router();

router.get("/kampanyatur-performans", getKampanyaturPerformans);

module.exports = router;

const express = require("express");
const { getIcerikPerformans } = require("../controllers/icerikController");

const router = express.Router();

router.get("/icerik-performans", getIcerikPerformans);

module.exports = router;

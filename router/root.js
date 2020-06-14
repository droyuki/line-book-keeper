const express = require("express");
const linebotParser = require("../linebot/parser");
const router = express.Router();

router.post("/", linebotParser);

module.exports = router;

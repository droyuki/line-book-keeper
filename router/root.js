const express = require("express");
const linebotParser = require("../linebotParser");
const router = express.Router();

router.post("/", linebotParser);

module.exports = router;

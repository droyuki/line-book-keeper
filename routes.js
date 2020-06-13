const getUserSheet = require("./api/getUserSheet");
const register = require("./api/register");
const linebotParser = require("./api/linebotParser");

const routes = {
  "GET /user/sheet": getUserSheet,
  "POST /register": register,
  "POST /": linebotParser
};

module.exports = routes;

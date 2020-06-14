const { google } = require("googleapis");
const REDIRECT_URL =
  "https://infinite-hollows-73424.herokuapp.com/oauth";

console.log(
  process.env.AUTH_CLIENT_ID,
  process.env.AUTH_CLIENT_SECRET
);
module.exports = new google.auth.OAuth2(
  process.env.AUTH_CLIENT_ID,
  process.env.AUTH_CLIENT_SECRET,
  REDIRECT_URL
);

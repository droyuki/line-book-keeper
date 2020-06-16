import { google } from "googleapis";

const REDIRECT_URL =
  "https://infinite-hollows-73424.herokuapp.com/oauth";

console.log(
  process.env.AUTH_CLIENT_ID,
  process.env.AUTH_CLIENT_SECRET
);
export default new google.auth.OAuth2(
  process.env.AUTH_CLIENT_ID,
  process.env.AUTH_CLIENT_SECRET,
  REDIRECT_URL
);

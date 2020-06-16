import oAuthClient from "./oAuthClient";
const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
];

function authorize(userId) {
  const authUrl = oAuthClient.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    state: userId,
  });

  return authUrl;

  // getNewToken(oAuth2Client, callback);
  // Check if we have previously stored a token.
  // fs.readFile(TOKEN_PATH, (err, token) => {
  //   if (err)
  //     return getNewToken(oAuth2Client, callback);
  //   oAuth2Client.setCredentials(JSON.parse(token));
  //   callback(oAuth2Client);
  // });
}

export default authorize;

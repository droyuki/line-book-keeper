const queryUser = require("../db/queryUser");
const textHandler = require("./textHandler");
const authorize = require("../auth/authorize");

async function onMessage(event) {
  console.log(event);

  const { userId } = event.source;
  const user = await queryUser(userId);

  if (user) {
    const { text } = event.message;
    const response = textHandler(text);
    event.reply(response);
  } else {
    // google oauth
    const authUrl = authorize(userId);

    event.reply(`請登入: ${authUrl}`);
  }
}

module.exports = onMessage;

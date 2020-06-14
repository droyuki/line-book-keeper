const queryUser = require("../db/queryUser");
const textHandler = require("./textHandler");

async function onMessage(event) {
  console.log(event);

  const user = await queryUser(event.source.userId);

  if (user) {
    const { text } = event.message;
    const response = textHandler(text);
    event.reply(response);
  } else {
    //TODO: google oauth, get google sheet
    event.reply("請註冊");
  }
}

module.exports = onMessage;

const linebot = require("linebot");
const queryUser = require("./db/queryUser");
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();

bot.on("message", async (event) => {
  console.log(event);

  const user = await queryUser(event.source.userId);

  if (user) {
    event.reply(JSON.stringify(user));
  } else {
    event.reply("請註冊");
  }
});

module.exports = linebotParser;

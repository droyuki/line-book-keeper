const express = require("express");
const linebot = require("linebot");
const queryUser = require("../db/queryUser");
const router = express.Router();
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

  // event
  //   .reply(event.message.text)
  //   .then(function () {
  //     // success
  //   })
  //   .catch(function () {
  //     // error
  //   });
});

router.post("/", linebotParser);

module.exports = router;

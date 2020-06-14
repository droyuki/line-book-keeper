const express = require("express");
const linebot = require("linebot");
const router = express.Router();
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();

bot.on("message", (event) => {
  console.log(event);

  event
    .reply(event.message.text)
    .then(function () {
      // success
    })
    .catch(function () {
      // error
    });
});

router.post("/", linebotParser);

module.exports = router;

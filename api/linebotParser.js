const linebot = require("linebot");

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const linebotParser = bot.parser();

bot.on("message", function(event) {
  console.log(event);
  // save to google sheet

  event
    .reply(event.message.text)
    .then(function(data) {
      // success
    })
    .catch(function(error) {
      // error
    });
});

module.exports = linebotParser;

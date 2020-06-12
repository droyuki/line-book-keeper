const express = require("express");
const linebot = require("linebot");
const fetch = require("node-fetch");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const linebotParser = bot.parser();

bot.on("message", function(event) {
  console.log(event);
  // save to google sheet
  fetch(
    "https://script.google.com/macros/s/AKfycbzOjEYaLE76UBm5esJkUxPxxzPZsAyB_KKgW7ZMUszFaKw3K3qA/exec"
  ).then(() => {
    console.log("done");
  });
  event
    .reply(event.message.text)
    .then(function(data) {
      // success
    })
    .catch(function(error) {
      // error
    });
});

app.post("/", linebotParser);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});

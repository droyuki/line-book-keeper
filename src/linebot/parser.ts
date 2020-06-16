import linebot from "linebot";
import onMessage from "./onMessage";

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();

bot.on("message", onMessage);

export default linebotParser;

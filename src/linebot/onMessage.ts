import authorize from "../auth/authorize";
import config from "./config";
import queryUser from "../db/queryUser";
import textHandler from "./textHandler";
import { Client } from "@line/bot-sdk";

const line = new Client(config);
async function onMessage(event) {
  console.log(
    "=====got event=====",
    event,
    event.source.userId
  );
  try {
    const { userId } = event.source;
    const user = await queryUser(userId);

    if (user) {
      const { text } = event.message;
      const response = textHandler(text);

      line.replyMessage(event.replyToken, {
        type: "text",
        text: response,
      });
    } else {
      const authUrl = authorize(userId);

      line.replyMessage(event.replyToken, {
        type: "text",
        text: `請登入: ${authUrl}`,
      });
    }
  } catch (error) {}
}

export default onMessage;

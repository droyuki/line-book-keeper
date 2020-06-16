import queryUser from "../db/queryUser";
import textHandler from "./textHandler";
import authorize from "../auth/authorize";

async function onMessage(event) {
  console.log(
    "=====got event=====",
    event,
    event.source.userId
  );

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

export default onMessage;

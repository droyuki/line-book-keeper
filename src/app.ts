import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import linebotRouter from "./router/linebot";
import oauthRouter from "./router/oauth";
import registerRouter from "./router/register";
import userRouter from "./router/user";
import usersRouter from "./router/users";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use("/linebot", linebotRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/oauth", oauthRouter);
app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/register", registerRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});

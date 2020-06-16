import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import oauthRouter from "./router/oauth";
import registerRouter from "./router/register";
import rootRouter from "./router/root";
import userRouter from "./router/user";
import usersRouter from "./router/users";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const app = express();
app.use("/", rootRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/oauth", oauthRouter);

if (process.env.NODE_ENV !== "production") {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/user", userRouter);
  app.use("/users", usersRouter);
  app.use("/register", registerRouter);
}

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});

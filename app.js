const app = require("express")();
const bodyParser = require("body-parser");
const registerRouter = require("./router/register");
const rootRouter = require("./router/root");
const userRouter = require("./router/user");
const usersRouter = require("./router/users");
const oauthRouter = require("./router/oauth");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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

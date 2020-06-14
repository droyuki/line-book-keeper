const app = require("express")();
const bodyParser = require("body-parser");
const registerRouter = require("./router/register");
const rootRouter = require("./router/rootRouter");
const userRouter = require("./router/user");
const usersRouter = require("./router/users");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", rootRouter);

if (process.env.NODE_ENV !== "production") {
  app.use("/user", userRouter);
  app.use("/users", usersRouter);
  app.use("/register", registerRouter);
}

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});

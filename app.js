const express = require("express");
const fetch = require("node-fetch");
const routes = require("./routes");
const notFound = require("./api/notFound");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use((req, res) => {
  const route = req.method + " " + req.url;
  const handler = routes[route] || notFound;

  handler(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});

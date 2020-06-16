import express from "express";
import onMessage from "../linebot/onMessage";
import { middleware } from "@line/bot-sdk";

const router = express.Router();

const config = {
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
};

router.post("/", middleware(config), (req, res) => {
  onMessage(req.body.events);
});

export default router;

import express from "express";
import config from "../linebot/config";
import onMessage from "../linebot/onMessage";
import { middleware } from "@line/bot-sdk";

const router = express.Router();

router.post("/", middleware(config), (req, res) => {
  onMessage(res.json(req.body.events));
});

export default router;

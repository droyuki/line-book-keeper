import express from "express";
import linebotParser from "../linebot/parser";
const router = express.Router();

router.post("/", linebotParser);

export default router;

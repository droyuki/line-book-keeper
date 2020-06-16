import express from "express";
import insertUser from "../db/insertUser";

async function register(req, res) {
  try {
    const { userId, description, sheetId } = req.body;
    const result = await insertUser({
      userId,
      description,
      sheetId,
    });

    res.send(result);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const router = express.Router();

router.post("/", register);

export default router;

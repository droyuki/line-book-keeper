import express from "express-promise-router";
import queryUser from "../db/queryUser";

const router = express();

async function getUser(req, res) {
  try {
    const { userId } = req.params;
    const result = await queryUser(userId);

    res.send(result);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

router.get("/:userId", getUser);

export default router;

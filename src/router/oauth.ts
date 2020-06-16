import express from "express";
import oAuthClient from "../auth/oAuthClient";
import insertUser from "../db/insertUser";

async function oauth(req, res) {
  const { code, state } = req.query;

  try {
    const { tokens } = await oAuthClient.getToken(
      code
    );
    // oAuthClient.setCredentials(tokens);
    insertUser({
      ...tokens,
      userId: state,
    });

    console.log("=== auth complete", code, tokens);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
const router = express.Router();

router.get("/", oauth);

export default router;

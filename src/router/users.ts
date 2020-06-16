import query from "../db/query";
import express from "express-promise-router";
const router = express();

async function getAllUser(req, res) {
  try {
    const { rows } = await query(
      'SELECT * FROM "user"'
    );

    res.send(rows);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

router.get("/", getAllUser);

export default router;

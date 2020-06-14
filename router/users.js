const query = require("../db/query");
const router = require("express-promise-router")();

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

module.exports = router;

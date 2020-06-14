const router = require("express-promise-router")();
const queryUser = require("../db/queryUser");

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

module.exports = router;

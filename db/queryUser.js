const query = require("./query");

async function queryUser(userId) {
  const {
    rows,
  } = await query(
    'SELECT * FROM "user" WHERE user_id = $1',
    [userId]
  );

  const user = rows && rows[0] ? rows[0] : null;
  return user;
}

module.exports = queryUser;

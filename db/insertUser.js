const query = require("./query");

async function insertUser({
  userId,
  sheetId,
  description,
}) {
  try {
    const result = await query(
      'INSERT INTO "user"(user_id, sheet_id, description) VALUES($1, $2, $3)',
      [userId, sheetId, description]
    );

    console.log(result);
    return { code: 200 };
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = insertUser;

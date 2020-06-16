import query from "./query";

async function insertUser({
  userId,
  ...tokens
  // sheetId,
  // description,
}) {
  console.log("--- insert:", {
    userId,
    tokens,
  });
  try {
    const result = await query(
      'INSERT INTO "user"(user_id, access_token, refresh_token, expiry_date) VALUES($1, $2, $3, to_timestamp($4))',
      [
        userId,
        tokens.access_token,
        tokens.refresh_token,
        tokens.expiry_date / 1000,
      ]
    );

    console.log(result);
    return { code: 200 };
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default insertUser;

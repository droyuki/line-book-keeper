import query from "./query";
import Cache from "./Cache";
const cache = new Cache();

async function queryUser(userId) {
  return cache.get(userId, async () => {
    const {
      rows,
    } = await query(
      'SELECT * FROM "user" WHERE user_id = $1',
      [userId]
    );

    const user = rows && rows[0] ? rows[0] : null;
    return user;
  });
}

export default queryUser;

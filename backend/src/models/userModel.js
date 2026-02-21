import db from "../configs/db.js";

export async function getUserByEmail(email) {
  const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return user.rows[0];
}

export async function createUser({username, email, password}) {
  const newUser = await db.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
    [username, email, password],
  );
  return newUser.rows[0];
}

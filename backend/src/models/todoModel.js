// Query DB untuk CRUD ToDo
import db from "../configs/db.js";

// GET
export async function findTodoById(id) {
  const todo = await db.query("SELECT * FROM todos WHERE id = $1", [id]);
  return todo.rows;
}

// CREATE
export async function createTodo(userId, todo) {
  const createTodo = await db.query(
    "INSERT INTO todos (user_id, todo) VALUES ($1, $2) RETURNING *",
    [userId, todo],
  );
  return createTodo.rows;
}

// GET Berdasarkan user
export async function findTodoByUserId(userId) {
  const todo = await db.query("SELECT * FROM todos WHERE user_id = $1", [userId]);
  return todo.rows;
}

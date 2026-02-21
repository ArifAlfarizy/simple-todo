import { findTodoById, createTodo, findTodoByUserId } from "../models/todoModel.js";

export async function findTodoController(req, res) {
  try {
    const { id } = req.query;
    const findTodo = await findTodoById(id);

    if (!findTodo) {
      return res.status(404).json({ message: "You have no list yet!" });
    }

    res.status(200).json(findTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

// GET Controller by user
export async function findTodoByUserController(req, res) {
  try {
    const userId = req.user.userId;
    const findTodo = await findTodoByUserId(userId);

    if (!findTodo) {
      return res.status(404).json({ message: "You have no list yet!" });
    }

    res.status(200).json(findTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function createTodoController(req, res) {
  try {
    const userId = req.user.userId
    const todo = req.body;

    if (!todo) {
      return res.status(404).json({ message: "Can't insert an empty todo!" });
    }

    const newTodo = await createTodo(userId, todo);

    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

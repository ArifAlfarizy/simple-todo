import express from "express";
import { findTodoController, createTodoController, findTodoByUserController } from "../controllers/todoController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const todoRouter = express.Router();

todoRouter.get("/", verifyToken , findTodoController)
todoRouter.get("/myTodo", verifyToken , findTodoByUserController)
todoRouter.post("/", verifyToken , createTodoController)

export default todoRouter


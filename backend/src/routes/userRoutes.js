import express, { Router } from "express";
import {
  createUserController,
  verifyUserController,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", createUserController);
userRouter.post("/login", verifyUserController);

export default userRouter;

import { getUserByEmail, createUser } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// Register
export async function createUserController(req, res) {
  try {
    const { username, email, password } = req.body;
    const checkUser = await getUserByEmail(email);

    if (checkUser) {
      return res
        .status(409)
        .json({ message: "User already exists. Try logging in!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await createUser({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

// Login
export async function verifyUserController(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const checkUser = await getUserByEmail(email);

    if (!checkUser) {
      return res
        .status(409)
        .json({ message: "User does not exists. Try register!" });
    }

    const passwordMatch = await bcrypt.compare(password, checkUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign({ userId: checkUser.id }, "tes", {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Server error" });
  }
}

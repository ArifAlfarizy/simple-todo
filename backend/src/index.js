import express from "express";
import db from "./configs/db.js";
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Passed");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, "tes");
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Invalid token" });
  }
}

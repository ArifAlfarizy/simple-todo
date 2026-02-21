import dotenv from "dotenv"
dotenv.config()
import { Client } from "pg"

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
})

db.connect()
  .then(() => console.log("Connected to PostgreSQL !"))
  .catch(err => console.error("Connection error !", err))

export default db

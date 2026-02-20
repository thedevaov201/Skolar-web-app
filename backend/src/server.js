import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./config/db.js"
import routes from "./routes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use("/api", routes)

connectDB()

app.listen(PORT, () => {
    console.log("Server up and running on port ", PORT)
})
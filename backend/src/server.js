import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./config/db.js"
import routes from "./routes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({origin: "http://localhost:5173", credentials: true}))

app.use("/api", routes)

connectDB()

app.listen(PORT, () => {
    console.log("Server up and running on port ", PORT)
})
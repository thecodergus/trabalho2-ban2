import express from "express"
import {config as envConfig} from "dotenv"
import cookieParser from "cookie-parser"

import indexRoute from "./src/routes/index"

const app = express()
envConfig()
const port = process.env.PORT_API || 3000

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())

// Routes
app.use(indexRoute)

// Start server
app.listen(port, () => console.log("Server ON"))
import express from "express"
import { engine } from "express-handlebars"
import {config as envConfig} from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import path from "path"

// Conect database
mongoose
    .connect("mongodb://ban2:trabalho@localhost:27017")
    .then(() => console.log("Conectado ao mongo"))
    .catch(err => console.error(`Deu problema:\n${err}`))


const app = express()
envConfig()
const port = process.env.PORT_API || 3000

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))
app.engine(".hbs", engine({extname: ".hbs"}))
app.set("view engine", ".hbs")
app.set("views", "./src/views")

// Routes
import indexRoute from "./src/routes/index"
app.use(indexRoute)

// Start server
app.listen(port, () => console.log("Server ON"))
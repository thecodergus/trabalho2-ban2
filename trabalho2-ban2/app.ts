import express from "express"
import session from "express-session"
import { engine } from "express-handlebars"
import {config as envConfig} from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import MongoStore from "connect-mongo"
import Routes from "./src/routes"
import path from "path"
import { v4 as uuid } from "uuid"
import flash from "connect-flash"
envConfig()


const app = express()
const port = process.env.PORT_SERVER || 3000

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_ANDRESS,
    MONGODB_PORT
} = process.env

// Conect database
const mongo_url: string = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_ANDRESS}:${MONGODB_PORT}`
mongoose
    .connect(mongo_url)
    .then(() => console.log("Conectado ao mongo"))
    .catch(err => console.error(`Deu problema:\n${err}`))

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))
app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: `${__dirname}/src/views/layouts/`,
    partialsDir: `${__dirname}/src/views/partials/`
}))
app.set("view engine", ".hbs")
app.set("views", "./src/views/pages")

// Session
app.use(session({
    store: MongoStore.create({ mongoUrl: mongo_url }),
    secret: "Bando de dados 2",
    genid: () => uuid(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (3600000 * 24) * 7
    },
}))
app.use(flash())

// Routes
app.use("/hotel", Routes.Hotel)
app.use(Routes.Home)

// Start server
app.listen(port, () => console.log("Server ON"))
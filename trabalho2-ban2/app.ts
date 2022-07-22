import "dotenv/config"
import express from "express"
import { engine } from "express-handlebars"
import cookieParser from "cookie-parser"
import Routes from "./src/routes"
import path from "path"
import { mongoose, session, passport} from "./configs"


const app = express()
const port = process.env.PORT_SERVER || 3000

// Mongo db
mongoose()

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))

// View Engine - Handlebars
app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: `${__dirname}/src/views/layouts/`,
    partialsDir: `${__dirname}/src/views/partials/`
}))
app.set("view engine", ".hbs")
app.set("views", "./src/views/pages")



// Session
app.use(session())
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/hotel", Routes.Hotel)
app.use("/conta", Routes.Conta)
app.use(Routes.Home)

// Start server
app.listen(port, () => console.log("Server ON"))
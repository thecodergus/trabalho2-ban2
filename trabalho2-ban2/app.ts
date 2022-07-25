import "dotenv/config"
import express from "express"
import { engine } from "express-handlebars"
import cookieParser from "cookie-parser"
import Routes from "./src/routes"
import path from "path"
import { mongoose, session} from "./configs"
import passport from "./configs/passport"
import { fornecer_parametros_comuns, isAuthenticated, isEmpregado, fornecer_hoteis } from "./src/middleware"


const app = express()
const port = process.env.PORT_SERVER || 3000

// Mongo db
mongoose()

// Enable express session 
app.use(session())

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
    partialsDir: `${__dirname}/src/views/partials/`,
}))
app.set("view engine", ".hbs")
app.set("views", "./src/views/pages")

// Passport
app.use(passport.initialize())
app.use(passport.session())
app.use(fornecer_parametros_comuns)

// Routes
app.use("/hotel", [isAuthenticated, fornecer_hoteis], Routes.Hotel)
app.use("/conta", [fornecer_hoteis], Routes.Conta)
app.use("/administracao", [isAuthenticated, isEmpregado], Routes.Administracao)
app.use([fornecer_hoteis], Routes.Home)

// Start server
app.listen(port, () => console.log("Server ON"))
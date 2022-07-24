import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import { engine } from "express-handlebars"
import cookieParser from "cookie-parser"
import Routes from "./src/routes"
import path from "path"
import { mongoose, session} from "./configs"
import passport from "./configs/passport"
import { IUsuario, IEmpregado, ICliente } from "types"


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
    // handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set("view engine", ".hbs")
app.set("views", "./src/views/pages")

// Passport
app.use(passport.initialize())
app.use(passport.session())
app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals.user = req.user
    next()
})

// Routes
app.use("/hotel", Routes.Hotel)
app.use("/conta", Routes.Conta)
app.use(Routes.Home)

// Start server
app.listen(port, () => console.log("Server ON"))
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import { Usuario } from "models"

// Configurar passoport - que contem as informações de cada usuario
// passport.use(new LocalStrategy(
//     { usernameField: "email" },
//     (email, password, done) => {
//         if (email.includes("@hotel.com")) {

//         }
//     }
// ))

// passport.use(new LocalStrategy(Usuario.authenticate()))
passport.use(Usuario.createStrategy())

passport.serializeUser(Usuario.serializeUser());
passport.deserializeUser(Usuario.deserializeUser());

export default passport
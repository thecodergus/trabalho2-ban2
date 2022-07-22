import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"

// Configurar passoport - que contem as informações de cada usuario
passport.use(new LocalStrategy(
    { usernameField: "email" },
    (email, password, done) => {
        if (email.includes("@hotel.com")) {

        }
    }
))

export default passport
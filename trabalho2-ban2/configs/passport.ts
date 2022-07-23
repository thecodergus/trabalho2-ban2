import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import { Usuario } from "models"
import { IUsuario } from "types"

// Configurar passoport - que contem as informações de cada usuario
passport.use(new LocalStrategy(
    { usernameField: "email", passwordField: "senha" },
    function (email: string, senha: string, done: any) {
        Usuario.findOne({email}, (err: any, usuario: IUsuario) => {
            if(err) return done(err)
            if(!usuario) return done(null, false)
            if(!usuario.compararSenhas(senha)) return done(null, false)

            return done(null, usuario)
        })
    }
))

// passport.use(new LocalStrategy(Usuario.authenticate()))
// passport.use(Usuario.createStrategy(`{}`))

// passport.serializeUser(Usuario.serializeUser());
// passport.deserializeUser(Usuario.deserializeUser());

export default passport
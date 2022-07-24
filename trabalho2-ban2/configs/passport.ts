import { Request } from "express"
import { Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import { Usuario } from "../src/models"
import { IUsuario } from "../src/types"

export const passport_local_options = {
    usernameField: "email",
    passwordField: "senha"
}

export const my_Strategy: any = new LocalStrategy((email: string, password: string, done: any) => {
    Usuario.findOne({ email: email.toLowerCase() }, async (err: NativeError, user: IUsuario) => {
        if (err) return done(err)

        if (!user) {
            return done(undefined, false, {
                error: {
                    title: "Error",
                    message: "Email não encontrado"
                }
            })
        }

        const r: boolean = await user.compararSenhas(password)

        if (r) {
            return await done(undefined, user)
        } else {
            return done(undefined, false, {
                error: {
                    title: "Error",
                    message: "Email ou senha errados"
                }
            })
        }

    })
})

passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user)
})
passport.deserializeUser((id: any, done: any) => {
    Usuario.findById(id, (err: NativeError, user: IUsuario) => done(err, user.toJSON()))
})
passport.use(my_Strategy)


export default passport
import { Request } from "express"
import { Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import { Usuario } from "../src/models"
import { IUsuario } from "../src/types"

export const passport_local_options = {
    usernameField: "email",
    passwordField: "senha"
}

// Configurar passoport - que contem as informações de cada usuario
const my_Strategy = new LocalStrategy(async (username: string, password: string, done: any) => {
        // console.log("OIIIIII")
        // console.log(`${username} - ${password}`)
        // console.log("pau no cu de geral".toUpperCase())
        const usuario: any = await Usuario.findOne({email: username})

        // if (err) return done(err)
        if (!(await usuario)) return done(null, false)
        if (!(await usuario.compararSenhas(password))) return done(null, false)

        return done(null, usuario)
    }
)


// export const passport_local_config = (req: Request, email: string, senha: string, done: any) => {
//             console.log("pau no cu de geral - local_config".toUpperCase())
//             Usuario.findOne({ email: email }, (err: any, user: IUsuario) => {
//             if (err) return done(err)
//             if (!user) return done(null, false)
//             if (!user.compararSenhas(senha)) return done(null, false)

//             return done(null, user)
//         })w
//     }

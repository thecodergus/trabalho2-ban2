import { Schema, models, model } from "mongoose"
import bcrypt from "bcryptjs"
import isEmail from "validator/lib/isEmail"
import type { IUsuario } from "../types"
import { v4 as uuid } from "uuid"
import { EmpregadoSchema } from "./Empregado"
import { ClienteSchema } from "./Cliente"

// Idade do Gustavo - 20
const salt: number = 4

const UsuarioSchema: Schema<IUsuario> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "E-mail invalido"]
    },
    senha: {
        type: String,
        select: false,
        required: true
    },
    empregado: {
        type: Boolean,
        required: true,
        default: false
    },
    data: Schema.Types.Mixed
})

UsuarioSchema.pre("save", function (this: IUsuario, next: (err?: Error | undefined) => void){
    if(!this.isModified("senha")){
        return next()
    }
    bcrypt.hash(this.senha, salt, (err: Error, hash: string) =>{
        if(err) return next(err)

        this.senha = hash
        next()
    })
})

UsuarioSchema.methods.compararSenhas = function (senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void {
    bcrypt.compare(senhaCandidata, this.password, (err, isMatch) => {
        if (err) return next(err, null)

        next(null, isMatch)
    })
}

//  Exportandos os models

const Usuario = models.UsuarioSchema || model("Usuario", UsuarioSchema)

const options = {
    discriminatorKey: 'kind'
}

export const Usuario_Cliente = models.Usuario_Cliente || Usuario.discriminator("Usuario_Cliente", new Schema({
    data: ClienteSchema
}, options))

export const Usuario_Empregado = models.Usuario_Empregado || Usuario.discriminator("Usuario_Empregado", new Schema({
    data: EmpregadoSchema
}, options))

export default Usuario
import { Schema, models, model } from "mongoose"
import bcrypt from "bcryptjs"
import isEmail from "validator/lib/isEmail"
import type { IUsuario } from "../types"
import { v4 as uuid } from "uuid"
import { EmpregadoSchema } from "./Empregado"
import { ClienteSchema } from "./Cliente"
import { tokenToString } from "typescript"

// Idade do Gustavo - 20
const saltRounds: number = 4

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
        // select: false,
        required: true
    },
    empregado: {
        type: Boolean,
        required: true,
        default: false
    },
    data: Schema.Types.Mixed
})

// referencia:
// https://stackoverflow.com/questions/14588032/mongoose-password-hashing
UsuarioSchema.pre("save", async function save(next: any): Promise<void> {
    if(!this.isModified("senha")) return next()

    try{
        const salt = await bcrypt.genSalt(saltRounds)
        this.senha = await bcrypt.hash(this.senha, salt)

        return next()
    }catch(err: any){
        return next(err)
    }
})


UsuarioSchema.methods.compararSenhas = async function compararSenhas(senha: string){
    return await bcrypt.compare(senha, this.senha)
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
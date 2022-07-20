import { Schema, models, model } from "mongoose"
import bcrypt from "bcryptjs"
import type { IUsuario } from "../types"
import Cliente from "./Cliente"
import Empregado from "./Empregado"


const salt: number = 24

const UsuarioSchema: Schema<IUsuario> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    tipo: {
        type: Number,
        required: true
    },
    tipo_content: {
        type: Cliente || Empregado,
        required: true
    }
})

UsuarioSchema.pre("save", function (this: IUsuario, next: (err?: Error | undefined) => void){
    if(!this.isModified("senha")){
        return next()
    }
    bcrypt.hash(this.senha, salt, (err: Error, hash: string) =>{
        if(err) return next(err)

        this.senha = hash
    })
})

UsuarioSchema.methods.compararSenhas = function (senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void {
    bcrypt.compare(senhaCandidata, this.password, (err, isMatch) => {
        if (err) return next(err, null)

        next(null, isMatch)
    })
}

const Usuario = models.UsuarioSchema || model("Usuario", UsuarioSchema)

export default Usuario
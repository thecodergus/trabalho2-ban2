import { Schema, models, model } from "mongoose"
import type { ICliente } from "../types"
import Usuario from "./Usuario"

const ClienteSchema: Schema<ICliente> = new Schema({
    credencial: Usuario,
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
})

const Cliente = models.ClienteSchema || model("Cliente", ClienteSchema)

export default Cliente
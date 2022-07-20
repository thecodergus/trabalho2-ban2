import { Schema, models, model } from "mongoose"
import type { ICliente } from "../types"

const ClienteSchema: Schema<ICliente> = new Schema({
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
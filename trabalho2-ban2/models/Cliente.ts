import { Schema, models, model } from "mongoose"
import type { ICliente } from "../types"
import Usuario from "./Usuario"
import { v4 as uuid } from "uuid" 

const ClienteSchema: Schema<ICliente> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
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
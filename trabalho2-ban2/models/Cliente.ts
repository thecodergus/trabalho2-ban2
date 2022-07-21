import { Schema, models, model } from "mongoose"
import type { ICliente } from "../types"
import UsuarioSchema from "./Usuario"
import { ReservaSchema } from "./Reserva"
import { EstadiaSchema } from "./Estadia"
import { v4 as uuid } from "uuid" 

export const ClienteSchema: Schema<ICliente> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    credencial: UsuarioSchema,
    nome: {
        type: String,
        // required: true
    },
    cpf: {
        type: String,
        // required: true,
        // unique: true
    },
    endereco: {
        type: String,
        // required: true
    },
    telefone: {
        type: String,
        // required: true
    },
    reservas: [ReservaSchema],
    estadias: [EstadiaSchema]

})

// const Cliente = models.ClienteSchema || model("Cliente", ClienteSchema)

// export default Cliente
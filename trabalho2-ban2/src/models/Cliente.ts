import { Schema, models, model } from "mongoose"
import type { ICliente } from "../types"
// import UsuarioSchema from "./Usuario"
import { ReservaSchema } from "./Reserva"
import { EstadiaSchema } from "./Estadia"

const configs = {
    _id: false
}


export const ClienteSchema: Schema<ICliente> = new Schema({
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
}, configs)

// const Cliente = models.ClienteSchema || model("Cliente", ClienteSchema)

// export default Cliente
import { Schema, models, model } from "mongoose"
import {CidadeSchema} from "./Cidade"
import {EmpregadoSchema} from "./Empregado"
import {ClienteSchema} from "./Cliente"
import type { IHotel } from "../types"
import { v4 as uuid } from "uuid"

export const HotelSchema: Schema<IHotel> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    nome: {
        type: String,
        // required: true
    },
    endereco: {
        type: String,
        // required: true
    },
    telefone: {
        type: String,
        // required: true,
        // unique: true
    },
    cidade: {
        type: CidadeSchema,
        // required: true
    },
    empregado: {
        type: [EmpregadoSchema],
        // required: false,
        default: []
    },
    cliente: {
        type: [ClienteSchema],
        // required: false,
        default: []
    },
})

const Hotel = models.HotelSchema || model("Hotel", HotelSchema)

export default Hotel
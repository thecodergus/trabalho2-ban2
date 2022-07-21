import { Schema, models, model } from "mongoose"
import {CidadeSchema} from "./Cidade"
import {EmpregadoSchema} from "./Empregado"
import {ClienteSchema} from "./Cliente"
import type { IHotel } from "../types"
import { v4 as uuid } from "uuid"
import { QuartoSchema } from "./Quarto"

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
    empregados: {
        type: [EmpregadoSchema],
        // required: false,
        default: []
    },
    clientes: {
        type: [ClienteSchema],
        // required: false,
        default: []
    },
    quartos: {
        type: [QuartoSchema],
        default: []
    }
})


const Hotel = models.Hotel || model<IHotel>("Hotel", HotelSchema)

export default Hotel
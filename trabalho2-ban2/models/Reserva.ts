import type { IReserva} from "../types"
import { Schema, models, model } from "mongoose"
import { v4 as uuid } from "uuid" 
import {QuartoSchema} from "./Quarto"

export const ReservaSchema: Schema<IReserva> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    quarto: {
        type: QuartoSchema,
        // required: true
    },
    check_in: Date,
    check_out: Date,
    dia_reserva: {
        type: Date,
        // required: true
    },
    cama_extra: {
        type: Boolean,
        // default: false
    },
    valor_total: {
        type: Number,
        // default: 0
    },
    valor_entrada: {
        type: Number,
        // default: 0
    },
    status: {
        type: String,
        enum: ["em aguardo", "validado", "recusado"],
        defualt: "em aguardo"
    }
})

const Reserva = models.ReservaSchema || model("Reserva", ReservaSchema)

export default Reserva
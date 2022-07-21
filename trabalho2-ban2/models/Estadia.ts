import type { IEstadia } from "../types"
import { Schema, models, model } from "mongoose"
import { v4 as uuid } from "uuid" 
import {QuartoSchema} from "./Quarto"
import {ServicoSchema} from "./Servico"

const EstadiaSchema: Schema<IEstadia> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    quarto: {
        type: QuartoSchema,
        required: true
    },
    check_in: {
        type: Date,
        default: Date.now()
    },
    check_out: Date,
    valor: {
        type: Number,
        default: 0
    },
    servicos: [ServicoSchema]
})

const Estadia = models.EstadiaSchema || model("Estadia", EstadiaSchema)

export default Estadia
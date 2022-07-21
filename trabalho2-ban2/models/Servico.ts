import type { IServico } from "../types"
import { Schema, models, model } from "mongoose"
import { v4 as uuid } from "uuid" 


export const ServicoSchema: Schema<IServico> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    empregado: {
        _id: String,
        nome: String
    },
    valor: {
        type: Number,
        // required: true
    },
    dia: {
        type: Date,
        // required: true
    },
    descricao: String
})


// const Servico = models.ServicoSchema || model("Servico", ServicoSchema)

// export default Servico
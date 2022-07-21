import {Schema, models, model } from "mongoose";
import type {ICidade} from "../types"
import {v4 as uuid} from "uuid"

const CidadeSchema: Schema<ICidade> = new Schema({
    _id: {
        type: String,
        default: uuid,
        auto: true
    },
    nome: {
        type: String,
        requered: true
    },
    uf: {
        type: String,
        requered: true
    }
})

const Cidade = models.CidadeSchema || model("Cidade", CidadeSchema)

export default Cidade
import {Schema, models, model } from "mongoose";
import type {ICidade} from "../types"

const CidadeSchema: Schema<ICidade> = new Schema({
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
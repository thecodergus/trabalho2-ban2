import {Schema, models, model } from "mongoose";
import type {ICidade} from "../types"

export const CidadeSchema: Schema<ICidade> = new Schema({
    nome: String,
    uf: String
}, {
    _id: false
})

const Cidade = models.CidadeSchema || model("Cidade", CidadeSchema)

export default Cidade
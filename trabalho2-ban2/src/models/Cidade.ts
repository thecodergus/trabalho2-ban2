import {Schema, models, model } from "mongoose";
import type {ICidade} from "../types"
import {v4 as uuid} from "uuid"
// import findOrCreate from "mongoose-findorcreate"

export const CidadeSchema: Schema<ICidade> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    nome: String,
    uf: String
})

// CidadeSchema.plugin(findOrCreate)

const Cidade = models.CidadeSchema || model("Cidade", CidadeSchema)

export default Cidade
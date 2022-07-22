import {Schema, models, model } from "mongoose";
import type {ICidade} from "../types"

const configs = {
    _id: false
}

export const CidadeSchema: Schema<ICidade> = new Schema({
    nome: String,
    uf: String
}, configs)

// const Cidade = models.CidadeSchema || model("Cidade", CidadeSchema)

// export default Cidade
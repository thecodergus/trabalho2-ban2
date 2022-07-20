import {Schema, models, model } from "mongoose";

const CidadeSchema = new Schema({
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
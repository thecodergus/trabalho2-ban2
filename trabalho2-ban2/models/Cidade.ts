import {Schema, models, model} from "mongoose";

const CidadeSchema = new Schema({
    nome: String,
    uf: String
})

const Cidade = models.CidadeSchema || model("Cidade", CidadeSchema)

export default Cidade
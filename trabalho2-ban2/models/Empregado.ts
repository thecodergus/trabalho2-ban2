import { Schema, models, model } from "mongoose"

const EmpregadoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    funcao: [String]
})

const Empregado = models.EmpregadoSchema || model("Empregado", EmpregadoSchema)

export default Empregado
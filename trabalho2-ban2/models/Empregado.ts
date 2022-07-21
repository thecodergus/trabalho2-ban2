import { Schema, models, model } from "mongoose"
import type { IEmpregado } from "../types"
import Usuario from "./Usuario"
import { v4 as uuid } from "uuid" 

const EmpregadoSchema: Schema<IEmpregado> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    credencial: Usuario,
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
import { Schema, models, model } from "mongoose"
import type { IEmpregado } from "../types"
import UsuarioSchema from "./Usuario"
import { v4 as uuid } from "uuid" 

export const EmpregadoSchema: Schema<IEmpregado> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    credencial: UsuarioSchema,
    nome: {
        type: String,
        // required: true
    },
    endereco: {
        type: String,
        // required: true
    },
    telefone: {
        type: String,
        // required: true
    },
    funcao: {
        type: [String],
        default: []
    }
})

// const Empregado = models.EmpregadoSchema || model("Empregado", EmpregadoSchema)

// export default Empregado
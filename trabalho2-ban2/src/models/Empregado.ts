import { Schema, models, model } from "mongoose"
import type { IEmpregado } from "../types"

const configs = {
    _id: false
}


export const EmpregadoSchema: Schema<IEmpregado> = new Schema({
    hotel_id: {
        type: String,
        required: true,
        ref: "Hotel"
    },
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
}, configs)

// const Empregado = models.EmpregadoSchema || model("Empregado", EmpregadoSchema)

// export default Empregado
import { Schema, models, model } from "mongoose"
import Cidade from "./Cidade"
import Empregado from "./Empregado"
import type { IHotel } from "../types"

const HotelSchema: Schema<IHotel> = new Schema({
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
        required: true
    },
    cidade: {
        type: Cidade,
        required: true
    },
    funcionarios: [Empregado]
})

const Hotel = models.HotelSchema || model("Hotel", HotelSchema)

export default Hotel
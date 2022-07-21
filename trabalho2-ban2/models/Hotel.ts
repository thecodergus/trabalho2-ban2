import { Schema, models, model } from "mongoose"
import Cidade from "./Cidade"
import Empregado from "./Empregado"
import Cliente from "./Cliente"
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
        required: true,
        unique: true
    },
    cidade: {
        type: Cidade,
        required: true
    },
    empregado: [Empregado],
    cliente: [Cliente],
})

const Hotel = models.HotelSchema || model("Hotel", HotelSchema)

export default Hotel
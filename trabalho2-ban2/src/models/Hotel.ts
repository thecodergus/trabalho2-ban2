import { Schema, models, model } from "mongoose"
import Cidade, {CidadeSchema} from "./Cidade"
import {EmpregadoSchema} from "./Empregado"
import {ClienteSchema} from "./Cliente"
import type { IHotel } from "../types"
import { v4 as uuid } from "uuid"
import { QuartoSchema } from "./Quarto"


export const HotelSchema: Schema<IHotel> = new Schema({
    _id: {
        type: String,
        default: uuid
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
        // required: true,
        // unique: true
    },
    cidade: {
        type: CidadeSchema,
        // ref: "Cidade"
        // required: true
    },
    quartos: {
        type: [QuartoSchema],
        default: []
    },
    estadias: {
        type: [String],
        default: [],
        ref: 'Estadia'
    },
    reservas: {
        type: [String],
        default: [],
        ref: 'Estadia'
    }
})

HotelSchema.pre("save", async function save(next: any): Promise<void> {
    const cidade = await Cidade.findOne({
        nome: this.cidade.nome,
        uf: this.cidade.uf
    })

    if(!cidade){
        const create_cidade = await Cidade.create({
            nome: this.cidade.nome,
            uf: this.cidade.uf
        })

        this.cidade = await create_cidade
    }else{
        this.cidade = await cidade
    }

    return next()
})


const Hotel = models.Hotel || model<IHotel>("Hotel", HotelSchema)

export default Hotel
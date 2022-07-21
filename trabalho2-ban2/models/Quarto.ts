import type { IQuarto} from "../types"
import { Schema, models, model } from "mongoose"
import { v4 as uuid } from "uuid" 

export const QuartoSchema: Schema<IQuarto> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    tipo: {
        type: String,
        enum: ["single", "duplo", "casal", "suite"],
        default: "single"
    },
    numero: {
        type: Number,
        // required: true
    },
    andar: {
        type: Number,
        // required: true
    },
    preco_pernoite: {
        type: Number,
        // required: true
    }
})

// const Quarto = models.QuartoSchema || model("Quarto", QuartoSchema)

// export default Quarto

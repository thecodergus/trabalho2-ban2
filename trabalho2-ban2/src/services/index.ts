import { Hotel, Usuario } from "../models"
// import {UsuarioSchema} from "../models/Usuario"
// import { ClienteSchema } from "../models/Cliente"
import type { IUsuario } from "types"

export const get_all_hotel_nome = async () => {
    return await Hotel.find().select({
        _id: true,
        nome: true
    }).lean() || {}
}

export const inserir_cliente = async (data: any) => {

}
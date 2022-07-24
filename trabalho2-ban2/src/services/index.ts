import { Cidade, Hotel, Usuario } from "../models"
// import {UsuarioSchema} from "../models/Usuario"
// import { ClienteSchema } from "../models/Cliente"
import type { IUsuario } from "types"
import { NextFunction, Request, Response } from "express"

export const get_all_hotel_nome = async () => {
    return await Hotel.find().select({
        _id: true,
        nome: true
    }).lean() || {}
}

export const get_all_cidades = async () => {
    return await Cidade.find().lean() || {}
}


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

export const fornecer_parametros_comuns = (req: Request, res: Response, next: NextFunction) => {
    res.locals.user = req.user
    res.locals.logged = req.isAuthenticated()
    return next()
}
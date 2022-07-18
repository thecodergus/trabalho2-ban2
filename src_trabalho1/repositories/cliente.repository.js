import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { ClienteModel } from "../models/cliente.model.js";

export class ClienteRepository extends GenericRepository {
    findOne = async (codigo) => {
        const queryResult = await sql`SELECT * FROM cliente WHERE cod_cliente = ${codigo}`
        if (queryResult[0]) {
            return ClienteModel.fromDatabase(queryResult[0])
        }
        return undefined
    }

    findOneByCodUsuario = async (codigo) => {
        const queryResult = await sql`SELECT * FROM cliente WHERE cod_usuario = ${codigo}`

        if (queryResult[0]) {
            return ClienteModel.fromDatabase(queryResult[0])
        }
        return undefined
    }

    findAll = async () => {
        return []
    }

    findMany = () => {
        return []
    }
}
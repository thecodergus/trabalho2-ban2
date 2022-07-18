import { QuartoModel } from "../models/quarto.models.js";
import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'

export class QuartoRepository extends GenericRepository {
    findOne = async (codigo) => {
        return undefined
    }

    findAll = async () => {
        const result = []
        const queryResult = await sql`SELECT * FROM quarto`
        for (const item of queryResult) {
            result.push(QuartoModel.fromDatabase(item))
        }
        return result
    }

    findManyByHotel = async (cod_hotel) => {
        const result = []
        const queryResult = await sql`SELECT * FROM quarto WHERE cod_hotel = ${cod_hotel} ORDER BY pernoite ASC`
        for (const item of queryResult) {
            result.push(QuartoModel.fromDatabase(item))
        }
        return result
    }

    findMany = () => {
        return []
    }
}
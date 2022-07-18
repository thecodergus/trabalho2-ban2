import { CidadeModel } from "../models/cidade.model.js";
import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'

export class CidadeRepository extends GenericRepository {
    findOne = async (codigo) => {
        return undefined
    }

    findAll = async () => {
        const result = []
        const queryResult = await sql`SELECT * FROM cidade`
        for (const item of queryResult) {
            result.push(CidadeModel.fromDatabase(item))
        }
        return result
    }

    findMany = () => {
        return []
    }
}
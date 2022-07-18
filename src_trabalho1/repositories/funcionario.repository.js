import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { FuncionarioModel } from "../models/funcionario.model.js";

export class FuncionarioRepository extends GenericRepository {
    findOne = async (codigo) => {
        const queryResult = await sql`SELECT * FROM empregado WHERE cod_empregado = ${codigo}`
        if (queryResult[0]) {
            return FuncionarioModel.fromDatabase(queryResult[0])
        }
        return undefined
    }

    findAll = async () => {
        const result = []
        const queryResult = await sql`
            SELECT * from empregado;
        `

        for (const item of queryResult) {
            result.push(FuncionarioModel.fromDatabase(item))
        }
        return result
    }
    
    findManyByHotel = async (codigo) => {
        const result = []
        const queryResult = await sql`
            SELECT * from empregado
            WHERE empregado.cod_hotel = ${codigo}
        `
        for (const item of queryResult) {
            result.push(FuncionarioModel.fromDatabase(item))
        }
        return result
    }

    findMany = () => {
        return []
    }

    deletByCode = async (cod) => {
        await sql`
            DELETE from empregado where empregado.cod_empregado = ${cod};
        `
    }

    insert = async (nome, cod_hotel, funcao) => {
        await sql`
            insert into empregado (nome, cod_hotel, funcao)
                values (${nome}, ${cod_hotel}, ${funcao});
        `
    }
}
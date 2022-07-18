import { HotelModel } from "../models/hotel.model.js";
import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'

export class HotelRepository extends GenericRepository {
    findOne = async (codigo) => {
        const queryResult = await sql`
            SELECT hotel.cod_interno, cidade.nome as nome_cidade, hotel.nome, hotel.endereco, hotel.telefone
                FROM hotel, cidade
            WHERE hotel.cod_interno = ${codigo} AND hotel.cod_cidade = cidade.cod_cidade
        `
        if (queryResult[0]) {
            return HotelModel.fromDatabase(queryResult[0])
        }
        return undefined
    }

    findAll = async () => {
        const result = []
        const queryResult = await sql`
            SELECT hotel.cod_interno, cidade.nome as nome_cidade, hotel.nome, hotel.endereco, hotel.telefone
                FROM hotel
                    JOIN cidade on cidade.cod_cidade = hotel.cod_cidade
            ORDER BY nome
        `

        for (const item of queryResult) {
            result.push(HotelModel.fromDatabase(item))
        }
        return result
    }

    findManyFromCodCidade = async (cod_cidade) => {
        const result = []
        const queryResult = await sql`
            SELECT hotel.cod_interno, cidade.nome as nome_cidade, hotel.nome, hotel.endereco, hotel.telefone
                FROM hotel
                    JOIN cidade on cidade.cod_cidade = hotel.cod_cidade
                WHERE cidade.cod_cidade = ${cod_cidade}
            ORDER BY nome
        `

        for (const item of queryResult) {
            result.push(HotelModel.fromDatabase(item))
        }
        return result
    }

    findMany = () => {
        return []
    }
}
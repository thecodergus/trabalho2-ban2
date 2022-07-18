import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { EstadiaModel } from "../models/estadia.model.js";

export class EstadiaRepository extends GenericRepository {

    findOne = async (codigo) => {
        const queryResult = await sql`
            SELECT
                estadia.cod_estadia,
                estadia.cod_quarto,
                hotel.cod_interno as cod_hotel,
                estadia.cod_cliente,
                estadia.check_in,
                estadia.check_out,
                estadia.valor_total
                FROM estadia
                    JOIN quarto on quarto.cod_quarto = estadia.cod_quarto
                    JOIN hotel on hotel.cod_interno = quarto.cod_hotel
            WHERE estadia.cod_cliente = ${codigo}`
        if (queryResult[0]) {
            return EstadiaModel.fromDatabase(queryResult[0])
        }
        return undefined
    }


    findAll = async () => {
        const queryResult = await sql`
            SELECT
                estadia.cod_estadia,
                estadia.cod_quarto,
                hotel.cod_interno as cod_hotel,
                estadia.cod_cliente,
                estadia.check_in,
                estadia.check_out,
                estadia.valor_total
                FROM estadia
                    JOIN quarto on quarto.cod_quarto = estadia.cod_quarto
                    JOIN hotel on hotel.cod_interno = quarto.cod_hotel
        `

        if (queryResult) {
            return EstadiaModel.fromDatabase(queryResult)
        }

        return undefined
    }

    findMany = async (codigo) => {
        const queryResult = await sql`
            SELECT
                estadia.cod_estadia,
                estadia.cod_quarto,
                hotel.cod_interno as cod_hotel,
                estadia.cod_cliente,
                estadia.check_in,
                estadia.check_out,
                estadia.valor_total
                FROM estadia
                    JOIN quarto on quarto.cod_quarto = estadia.cod_quarto
                    JOIN hotel on hotel.cod_interno = quarto.cod_hotel
            WHERE estadia.cod_cliente = ${codigo}`
        const result = []

        for (const item of queryResult) {
            result.push(EstadiaModel.fromDatabase(item))
        }
        return result
    }

    insertEstadia = async (codigo, cod_quarto, cod_cliente, check_in, check_out, valor_total) => {
        await sql.begin(sql => [
            sql`update reserva set status = 1 where reserva.cod_reserva = ${codigo}`,
            sql`insert into estadia (
                    cod_quarto,
                    cod_cliente,
                    check_in,
                    check_out,
                    valor_total
                ) values (
                    ${cod_quarto},
                    ${cod_cliente},
                    ${check_in},
                    ${check_out},
                    ${valor_total}
                );`
          ])
        return []
    }
}
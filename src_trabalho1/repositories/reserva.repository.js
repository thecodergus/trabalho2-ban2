import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { ReservaModel } from "../models/reserva.model.js";

export class ReservaRepository extends GenericRepository {
    findOne = async (codigo) => {
        const queryResult = await sql`SELECT * FROM reserva WHERE reserva.cod_cliente = ${codigo}`
        if (queryResult[0]) {
            return ReservaModel.fromDatabase(queryResult[0])
        }
        return undefined
    }


    findAll = async () => {
        const result = []
        const queryResult = await sql`
            SELECT * from reserva ORDER BY cod_reserva DESC;
        `

        for (const item of queryResult) {
            result.push(ReservaModel.fromDatabase(item))
        }
        return result
    }

    findMany = (codigo) => {
        const queryResult = sql`SELECT * FROM reserva WHERE reserva.cod_cliente = ${codigo}`
        
        if (queryResult) {
            return ReservaModel.fromDatabase(queryResult)
        }
        return undefined
    }

    insertReserva = async (
        cod_quarto,
        cod_hotel,
        cod_cliente,
        check_in,
        check_out,
        dia_reserva,
        hora_reserva,
        cama_extra,
        valor_total,
        valor_entrada
    ) => {
        const queryResult = await sql`
            insert into reserva (
                cod_quarto,
                cod_hotel,
                cod_cliente,
                check_in,
                check_out,
                dia_reserva,
                hora_reserva,
                cama_extra,
                valor_total,
                valor_entrada)
            values (
                ${cod_quarto},
                ${cod_hotel},
                ${cod_cliente},
                ${check_in},
                ${check_out},
                ${dia_reserva},
                ${hora_reserva},
                ${cama_extra},
                ${valor_total},
                ${valor_entrada}
            )
        `
        return queryResult[0]
    }

    setRejected = async (codigo) => {
        const queryResult = await sql `update reserva set status = 2 where reserva.cod_reserva = ${codigo}`
        return queryResult[0]
    }

}
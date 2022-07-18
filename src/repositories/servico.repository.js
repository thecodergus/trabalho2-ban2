import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { ServicoModel } from "../models/servico.model.js";

export class ServicoRepository extends GenericRepository {
    findOne = async (codigo) => {
        return undefined
    }

    findAll = async () => {
        return []
    }

    findMany = () => {
        return []
    }

    findManyByCliente = async (cod_cliente) => {
        const result = []
        const queryResult = await sql`
            SELECT
                servico.cod_servico,
                servico.cod_estadia,
                servico.cod_empregado,
                servico.valor,
                empregado.funcao,
                empregado.nome,
                servico.dia,
                servico.hora
                FROM servico
                    JOIN empregado on empregado.cod_empregado = servico.cod_empregado
                    JOIN estadia on estadia.cod_estadia = servico.cod_estadia
                WHERE estadia.cod_cliente = ${cod_cliente}
        `

        for (const item of queryResult) {
            result.push(ServicoModel.fromDatabase(item))
        }
        
        return result
    }

    insert = async (servicoModel) => {
        const {cod_estadia, cod_empregado, valor, dia, hora, descricao } = servicoModel

        await sql.begin(sql => [
            sql`
            INSERT INTO servico (cod_estadia, cod_empregado, valor, dia, hora, descricao)
                VALUES (${cod_estadia}, ${cod_empregado}, ${valor}, ${dia}, ${hora}, ${descricao});
            ` ,
            sql`
            select atualizarValorServico(${cod_estadia});
            `
          ])
        return []
    
    }
}
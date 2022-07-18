import { GenericRepository } from "./generic.repository.js";
import sql from '../db.js'
import { UsuarioModel } from "../models/usuario.model.js";

export class UsuarioRepository extends GenericRepository {
    findOneByEmail = async (email) => {
        const queryResult = await sql`
            SELECT u.cod_usuario, u.email, u.senha, u.tipo, c.cod_cliente, c.nome, c.cpf, c.endereco, c.telefone
                FROM usuario u
                    LEFT JOIN cliente c on c.cod_usuario = u.cod_usuario    
            WHERE email = ${email}
        `
        return queryResult[0]
    }

    findOne = async (codigo) => {
        const queryResult = await sql`SELECT * FROM usuario WHERE cod_usuario = ${codigo}`
        if (queryResult[0]) {
            return UsuarioModel.fromDatabase(queryResult[0])
        }
        return undefined
    }

    findUsuarioCliente = async (codigo) => {
        const queryResult = await sql`
            SELECT u.*, c.cod_cliente, c.nome, c.cpf, c.endereco, c.telefone
                FROM usuario u 
                    JOIN cliente c on u.cod_usuario = c.cod_usuario
            WHERE u.cod_usuario = ${codigo}
        `
        return queryResult[0]
    }

    findAll = async () => {
        return []
    }

    findMany = () => {
        return []
    }

    insertUsuarioCliente = async (username, cpf, email, password, telephone, adress) => {
        password = UsuarioModel.hashPassword(password)
        const queryResult = await sql`
            select inserircliente(
                ${username},
                ${cpf},
                ${adress},
                ${telephone},
                ${email},
                ${password} 
            );
        `
    }
}
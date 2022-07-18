import { GenericModel } from './generic.model.js';
import bcrypt from 'bcryptjs'

export class UsuarioModel extends GenericModel {
   constructor (
        cod_usuario,
        email,
        senha,
        tipo
    ) {
        super()
        this.cod_usuario = cod_usuario
        this.email = email
        this.senha = senha
        this.tipo = tipo
    }

    static fromDatabase = (item) => {
        return new UsuarioModel(
            item.cod_usuario,
            item.email,
            item.senha,
            item.tipo
        )
    }

    static checkPassword = (password, hash) => {
        return bcrypt.compareSync(password, hash)
    }

    static hashPassword = (password) => {
        return bcrypt.hashSync(password)
    }
}
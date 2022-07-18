import { GenericModel } from './generic.model.js';

export class ClienteModel extends GenericModel {
   constructor (
        cod_cliente,
        cod_usuario,
        nome,
        cpf,
        endereco,
        telefone
    ) {
        super()
        this.cod_usuario = cod_usuario
        this.cod_cliente = cod_cliente
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }

    static fromDatabase = (item) => {
        return new ClienteModel(
            item.cod_cliente,
            item.cod_usuario,
            item.nome,
            item.cpf,
            item.endereco,
            item.telefone
        )
    }
}
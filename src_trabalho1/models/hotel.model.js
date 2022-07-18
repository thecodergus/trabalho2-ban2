import { GenericModel } from './generic.model.js';

export class HotelModel extends GenericModel {
   constructor (
        cod_interno,
        nome_cidade,
        nome,
        endereco,
        telefone
    ) {
        super()
        this.cod_interno = cod_interno;
        this.nome_cidade = nome_cidade;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    static fromDatabase = (item) => {
        return new HotelModel(
            item.cod_interno,
            item.nome_cidade,
            item.nome,
            item.endereco,
            item.telefone
        )
    }
}
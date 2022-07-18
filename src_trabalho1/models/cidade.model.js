import { GenericModel } from './generic.model.js';

export class CidadeModel extends GenericModel {
   constructor (
        cod_cidade,
        nome,
        uf
    ) {
        super()
        this.cod_cidade = cod_cidade
        this.nome = nome
        this.uf = uf
    }

    static fromDatabase = (item) => {
        return new CidadeModel(
            item.cod_cidade,
            item.nome,
            item.uf
        )
    }
}
import { GenericModel } from './generic.model.js';

export class FuncionarioModel extends GenericModel {
   constructor (
        cod_empregado,
        cod_hotel,
        nome,
        funcao
    ) {
        super()
        this.cod_empregado = cod_empregado
        this.nome = nome
        this.funcao = funcao
        this.cod_hotel = cod_hotel
    }

    static fromDatabase = (item) => {
        return new FuncionarioModel(
            item.cod_empregado,
            item.cod_hotel,
            item.nome,
            item.funcao
        )
    }
}
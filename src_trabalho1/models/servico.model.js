import { GenericModel } from './generic.model.js';

export class ServicoModel extends GenericModel {
   constructor (
        cod_servico,
        cod_estadia,
        cod_empregado,
        valor,
        funcao,
        nome,
        dia,
        hora
    ) {
        super()
        this.cod_servico = cod_servico
        this.cod_estadia = cod_estadia
        this.cod_empregado = cod_empregado
        this.valor = valor
        this.funcao = funcao
        this.nome = nome
        this.dia = dia
        this.hora = hora
    }

    static fromDatabase = (item) => {
        return new ServicoModel(
            item.cod_servico,
            item.cod_estadia,
            item.cod_empregado,
            item.valor,
            item.funcao,
            item.nome,
            item.dia,
            item.hora
        )
    }
}
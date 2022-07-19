import { GenericModel } from './generic.model.js';

export class EstadiaModel extends GenericModel {
    constructor (
        cod_estadia,
        cod_quarto,
        cod_hotel,
        cod_cliente,
        check_in,
        check_out,
        valor_total
    ) {
        super()
        this.cod_estadia = cod_estadia,
        this.cod_quarto = cod_quarto,
        this.cod_hotel = cod_hotel,
        this.cod_cliente = cod_cliente,
        this.check_in = check_in,
        this.check_out = check_out,
        this.valor_total = valor_total
    }

    static fromDatabase = (item) => {
        return new EstadiaModel(
            item.cod_estadia,
            item.cod_quarto,
            item.cod_hotel,
            item.cod_cliente,
            item.check_in,
            item.check_out,
            item.valor_total
        )
    }
}
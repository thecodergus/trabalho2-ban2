import { GenericModel } from './generic.model.js';

export class ReservaModel extends GenericModel {
    constructor (
        cod_reserva,
        cod_quarto,
        cod_hotel,
        cod_cliente,
        check_in,
        check_out,
        dia_reserva,
        hora_reserva,
        cama_extra,
        valor_total,
        valor_entrada,
        status
    ) {
        super()
        this.cod_reserva = cod_reserva,
        this.cod_quarto = cod_quarto,
        this.cod_hotel = cod_hotel,
        this.cod_cliente = cod_cliente,
        this.check_in = check_in,
        this.check_out = check_out,
        this.dia_reserva = dia_reserva,
        this.hora_reserva = hora_reserva,
        this.cama_extra = cama_extra,
        this.valor_total = valor_total,
        this.valor_entrada = valor_entrada,
        this.status = status
    }

    static fromDatabase = (item) => {
        return new ReservaModel(
            item.cod_reserva,
            item.cod_quarto,
            item.cod_hotel,
            item.cod_cliente,
            item.check_in,
            item.check_out,
            item.dia_reserva,
            item.hora_reserva,
            item.cama_extra,
            item.valor_total,
            item.valor_entrada,
            item.status
        )
    }
}
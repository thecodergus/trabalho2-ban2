import { GenericModel } from './generic.model.js';

export class QuartoModel extends GenericModel {
   constructor (
        cod_quarto,
        cod_hotel,
        numero,
        andar,
        pernoite,
        tipo_quarto // 0 = single, 1 = duplo, 2 = casal, 3 = suíte
    ) {
        super()
        this.cod_quarto = cod_quarto
        this.cod_hotel = cod_hotel
        this.numero = numero
        this.andar = andar
        this.pernoite = pernoite
        this.tipo_quarto = tipo_quarto
    }

    static fromDatabase = (item) => {
        return new QuartoModel(
            item.cod_quarto,
            item.cod_hotel,
            item.numero,
            item.andar,
            item.pernoite,
            item.tipo_quarto
        )
    }
}
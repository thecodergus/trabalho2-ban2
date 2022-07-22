import { Hotel } from "../models"

export const get_all_hotel_nome = async () => {
    return await Hotel.find().select({
        _id: true,
        nome: true
    }).lean() || {}
}
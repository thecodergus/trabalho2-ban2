import { HotelRepository } from "../../repositories/hotel.repository.js"

// https://stackoverflow.com/a/23944086
// Passando variáveis do middleware para o EJS
export const injectHotels = async (_, res, next) => {
    const hotelRepository = new HotelRepository()
    res.locals.hotelList = await hotelRepository.findAll()
    next()
}

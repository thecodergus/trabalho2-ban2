import { HotelRepository } from "../repositories/hotel.repository.js";

export const hotel = async (req, res) => {
    const codigo = req.params.codigo ?? -1

    const hotelRepository = new HotelRepository()
    let hotel = await hotelRepository.findOne(codigo)

    if (!hotel) {
        hotel = {
            nome: 'Hotel não encontrado'
        }
    }

    res.render('pages/hotel', { hotel });
}

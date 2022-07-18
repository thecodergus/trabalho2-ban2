import { CidadeRepository } from "../repositories/cidade.repository.js"
import { HotelRepository } from "../repositories/hotel.repository.js"

export const home = async (req, res) => {
  let hoteisCidade = []
  const cidadeRepository = new CidadeRepository()
  const cidades = await cidadeRepository.findAll()

  if (req.body?.cod_cidade != null) {
    const cod_cidade = req.body.cod_cidade
    const hotelRepository = new HotelRepository()
    hoteisCidade = await hotelRepository.findManyFromCodCidade(cod_cidade)
  }

  res.render('pages/home', {
    hoteisCidade,
    cidades
  })
}

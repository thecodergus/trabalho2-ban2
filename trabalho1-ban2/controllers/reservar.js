import { ClienteRepository } from "../repositories/cliente.repository.js"
import { ReservaRepository } from "../repositories/reserva.repository.js"
import { QuartoRepository } from "../repositories/quarto.repository.js"

export const reservar = async (req, res) => {
  if (!res.locals.loggedIn) {
    res.redirect('/login')
    return
  }

  const quartoRepository = new QuartoRepository()
  const cod_hotel = req.query.cod_hotel ?? 2
  const quartos = await quartoRepository.findManyByHotel(cod_hotel)

  res.render('pages/reservar', {
    errorMessage: '',
    successfulMessage: '',
    cod_hotel,
    quartos
  })
}

export const checkReserva = async (req, res) => {
  const cod_hotel = req.query.cod_hotel ?? 2
  const quartoRepository = new QuartoRepository()
  const quartos = await quartoRepository.findManyByHotel(cod_hotel)
  const { date_checkin, date_checkout, hotel, cod_quarto, cama_extra } = req.body
    const data = new Date()
    const dia = String(data.getDate())
    const mes = String(data.getMonth() + 1)
    const ano = String(data.getFullYear())
    const hora = String(data.getHours())
    const minuto = String(data.getMinutes())
    const atual_data = ano + '-' + mes + '-' + dia
    const atual_hora = hora + ':' + minuto +':00'

    try {
        const usuarioRepository = new ReservaRepository()
        const clienteRepository = new ClienteRepository()
        const cliente = await clienteRepository.findOneByCodUsuario(res.locals.usuario.cod_usuario)
        const camaextra = cama_extra == 'on' ? true : false
        await usuarioRepository.insertReserva(
          cod_quarto,
          hotel,
          cliente.cod_cliente,
          date_checkin,
          date_checkout,
          atual_data,
          atual_hora,
          camaextra,
          100,
          0)
        res.render('pages/reservar', {
          cod_hotel,
          errorMessage: '',
          successfulMessage: 'Reserva cadastrada com sucesso!',
          quartos
        })
    } catch (e) {
      console.log(e)
      res.render('pages/reservar', {
        cod_hotel,
        errorMessage: 'Erro ao reservar hotel',
        successfulMessage: '',
        quartos
      })
  }
}
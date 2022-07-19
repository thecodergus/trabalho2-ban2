import { EstadiaRepository } from "../repositories/estadia.repository.js"
import { ReservaRepository } from "../repositories/reserva.repository.js"

export const reservas = async (req, res, next) => {
    const reservaRepository = new ReservaRepository()
    const reservaList = await reservaRepository.findAll()
    const errorMessage = req.query?.errorMessage ?? ''
    const successfulMessage = req.query?.successfulMessage ?? ''

    res.render('pages/reservas', {
        errorMessage,
        successfulMessage,
        reservaList
    })
}

export const aceitarReserva = async (req, res) => {
    const reservaRepository = new ReservaRepository()
    const reservaList = await reservaRepository.findAll()
    const codigo = req.params.codigo
    const estadiaRepository = new EstadiaRepository()

    const cod_quarto = reservaList.find(reserva => reserva.cod_reserva == codigo)?.cod_quarto
    const cod_cliente = reservaList.find(reserva => reserva.cod_reserva == codigo)?.cod_cliente
    const check_in = reservaList.find(reserva => reserva.cod_reserva == codigo)?.check_in
    const check_out = reservaList.find(reserva => reserva.cod_reserva == codigo)?.check_out
    const valor_total = reservaList.find(reserva => reserva.cod_reserva == codigo)?.valor_total

    try {
        await estadiaRepository.insertEstadia(codigo, cod_quarto, cod_cliente, check_in, check_out, valor_total)
        res.redirect('/reservas?successfulMessage=Reserva aceita!')
    } catch(e) {
        console.log(e)
        res.redirect('/reservas?errorMessage=Erro ao aceitar reserva!')
    }
}

export const rejeitarReserva = async (req, res) => {
    const codigo = req.params.codigo
    const reservaRepository = new ReservaRepository()
    
    
    try {
        await reservaRepository.setRejected(codigo)
        res.redirect('/reservas?successfulMessage=Reserva rejeitada!')
      } catch(e) {
        console.log(e)
        res.redirect('/recervas?errorMessage=Erro ao rejeitar reserva!')
      }

}
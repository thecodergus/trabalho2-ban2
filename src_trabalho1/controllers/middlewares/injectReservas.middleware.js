import { ReservaRepository } from "../../repositories/reserva.repository.js"

// https://stackoverflow.com/a/23944086
// Passando variáveis do middleware para o EJS
export const injectReservas = async (_, res, next) => {
    const reservaRepository = new ReservaRepository()
    res.locals.reservaList = await reservaRepository.findMany(res.locals.usuario.cod_usuario)
    next()
}

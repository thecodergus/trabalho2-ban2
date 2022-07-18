import { EstadiaRepository } from "../../repositories/estadia.repository.js"

// https://stackoverflow.com/a/23944086
// Passando variáveis do middleware para o EJS
export const injectEstadia = async (_, res, next) => {
    const estadiaRepository = new EstadiaRepository()
    res.locals.estadiaList = await estadiaRepository.findAll()
    next()
}

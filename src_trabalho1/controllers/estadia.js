import { EstadiaRepository } from "../repositories/estadia.repository.js"
import { FuncionarioRepository } from "../repositories/funcionario.repository.js"
import { ServicoRepository } from "../repositories/servico.repository.js"

export const estadia = async (req, res, next) => {
    const estadiaRepository = new EstadiaRepository()
    const servicoRepository = new ServicoRepository()
    const funcionarioRepository = new FuncionarioRepository()
    
    const estadiaList = await estadiaRepository.findMany(res.locals.usuario.cod_cliente)
    const servicos = await servicoRepository.findManyByCliente(res.locals.usuario.cod_cliente)
    const funcionarios = await funcionarioRepository.findAll()
    const funcionariosByHotel = {}

    for (const funcionario of funcionarios) {
        funcionariosByHotel[funcionario.cod_hotel] = funcionariosByHotel[funcionario.cod_hotel] ?? []
        funcionariosByHotel[funcionario.cod_hotel].push(funcionario)
    }

    const errorMessage = req.query?.errorMessage ?? ''
    const successfulMessage = req.query?.successfulMessage ?? ''

    res.render('pages/estadias', {
        errorMessage,
        successfulMessage,
        servicos,
        funcionariosByHotel,
        estadiaList
    })
}
import { ServicoRepository } from "../repositories/servico.repository.js"
import { format } from 'date-fns'

export const novoServico = async (req, res) => {
    const servicoRepository = new ServicoRepository()
    const { cod_estadia, cod_empregado, descricao } = req.body
    const valor = 50
    const dia = format(new Date(), 'yyyy-MM-dd')
    const hora = format(new Date(), 'HH:mm')
    
    try {
        await servicoRepository.insert({
            cod_estadia,
            cod_empregado,
            descricao,
            valor,
            dia,
            hora
        })
        res.redirect('/estadias?successfulMessage=Servico adicionado com sucesso')
    } catch (e) {
        console.log(e)
        res.redirect('/estadias?errorMessage=Erro ao adicionar servico')
    }
}
  
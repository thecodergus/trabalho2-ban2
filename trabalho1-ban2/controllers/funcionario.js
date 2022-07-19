import { FuncionarioRepository } from "../repositories/funcionario.repository.js"
const funcionarioRepository = new FuncionarioRepository()

export const funcionario = async (req, res) => {
    const funcionarioList = await funcionarioRepository.findAll()
    const errorMessage = req.query?.errorMessage ?? ''
    const successfulMessage = req.query?.successfulMessage ?? ''

    res.render('pages/funcionario', {
      errorMessage,
      successfulMessage,
      funcionarioList
    })
}

export const admitirFuncionario = async (req, res) => {
  try {
    const {nome, hotel, funcao} = req.body
    await funcionarioRepository.insert(nome, hotel, funcao)
    res.redirect('/funcionario?successfulMessage=Funcionário cadastrado!')
  } catch(e) {
    console.log(e)
    res.redirect('/funcionario?errorMessage=Erro ao cadastrar funcionário!')
  }
}

export const demitirFuncionario = async (req, res) => {
  try {
    await funcionarioRepository.deletByCode(req.body.cod_funcionario)
    res.redirect('/funcionario?successfulMessage=Funcionário deletado da base de dados!')
  } catch(e) {
    res.redirect('/funcionario?errorMessage=Erro ao deletar funcionário!')
  }
}
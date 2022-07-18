import { UsuarioRepository } from "../repositories/usuario.repository.js"

export const cadastro = async (req, res) => {
  res.render('pages/cadastro', {
    errorMessage: ''
  })
}

export const checkCadastro = async (req, res) => {
  const { username, cpf, email, password, telephone, adress } = req.body

  try {
    const usuarioRepository = new UsuarioRepository()
    await usuarioRepository.insertUsuarioCliente(username, cpf, email, password, telephone, adress)
    res.render('pages/login', {
      errorMessage: '',
      successfulMessage: 'Usuário cadastrado com sucesso'
    })
  } catch (e) {
    res.render('pages/cadastro', {
      errorMessage: 'Erro ao cadastrar usuário'
    })
  }
}

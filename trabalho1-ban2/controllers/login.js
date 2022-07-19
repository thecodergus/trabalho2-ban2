import { UsuarioModel } from "../models/usuario.model.js"
import { ClienteRepository } from "../repositories/cliente.repository.js"
import { UsuarioRepository } from "../repositories/usuario.repository.js"

export const login = async (req, res) => {
  res.render('pages/login', {
    errorMessage: '',
    successfulMessage: ''
  })
}

export const checkLogin = async (req, res) => {
  const { email, password } = req.body
  const usuarioRepository = new UsuarioRepository()
  const usuarioModel = await usuarioRepository.findOneByEmail(email)

  if (usuarioModel && UsuarioModel.checkPassword(password, usuarioModel.senha)) {
    res.cookie('session_code', usuarioModel.cod_usuario)
    res.locals.loggedIn = true
    res.locals.usuario = {
        cod_usuario: usuarioModel.cod_usuario,
        email: usuarioModel.email,
        nome: usuarioModel.tipo === 0 ? usuarioModel.nome : 'Administrador',
        tipo: usuarioModel.tipo
    }
    res.redirect('/')
    return
  } else {
    res.render('pages/login', {
      errorMessage: 'Email ou senha incorretos',
      successfulMessage: ''
    })
  }
}

import { ClienteRepository } from "../../repositories/cliente.repository.js"
import { UsuarioRepository } from "../../repositories/usuario.repository.js"

export const injectUser = async (req, res, next) => {
    const codigo = req.cookies.session_code

    if (codigo !== undefined) {
        const usuarioRepository = new UsuarioRepository()
        const usuarioModel = await usuarioRepository.findOne(codigo)
        
        if (usuarioModel) {
            res.locals.loggedIn = true
            
            res.locals.usuario = {
                email: usuarioModel.email,
                tipo: usuarioModel.tipo
            }

            if (usuarioModel.tipo === 0) {
                const clienteRepository = new ClienteRepository()
                const cliente = await clienteRepository.findOneByCodUsuario(usuarioModel.cod_usuario)
                res.locals.usuario.cod_usuario = usuarioModel.cod_usuario
                res.locals.usuario.cod_cliente = cliente.cod_cliente
                res.locals.usuario.nome = cliente.nome
            }

            // Admin
            if (usuarioModel.tipo === 1) {
                res.locals.usuario.nome = 'Administrador'
            }

            return next()
        }
    }
    
    res.locals.usuario = {}
    res.locals.loggedIn = false
    next()
}

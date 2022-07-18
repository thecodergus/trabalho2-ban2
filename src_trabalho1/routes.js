import { Router } from 'express'
import { home } from './controllers/home.js'
import { hotel } from './controllers/hotel.js'
import { reservar } from './controllers/reservar.js'
import { checkReserva } from './controllers/reservar.js'
import { reservas } from './controllers/reservas.js'
import { estadia } from './controllers/estadia.js'
import { admitirFuncionario, demitirFuncionario, funcionario } from './controllers/funcionario.js'
import { checkLogin, login } from './controllers/login.js'
import { checkCadastro, cadastro } from './controllers/cadastro.js'
import { injectHotels } from './controllers/middlewares/injectHotels.middleware.js'
import { injectUser } from './controllers/middlewares/injectUser.middleware.js'
import { logout } from './controllers/logout.js'
import { onlyAdmin } from './controllers/middlewares/onlyAdmin.middleware.js'
import { injectReservas } from './controllers/middlewares/injectReservas.middleware.js'
import { injectEstadia } from './controllers/middlewares/injectEstadia.middleware.js'
import { aceitarReserva } from './controllers/reservas.js'
import { rejeitarReserva } from './controllers/reservas.js'
import { novoServico } from './controllers/servico.js'

const router = Router()

router.get('/', [injectUser, injectHotels], home)
router.post('/', [injectUser, injectHotels], home)
router.get('/hotel/:codigo', [injectUser, injectHotels], hotel)

router.get('/login', [injectUser, injectHotels], login)
router.post('/login', [injectUser, injectHotels], checkLogin)
router.get('/logout', [injectHotels], logout)

router.get('/cadastro', [injectUser, injectHotels], cadastro)
router.post('/cadastro', [injectUser, injectHotels], checkCadastro)

router.get('/funcionario', [injectUser, onlyAdmin, injectHotels], funcionario)

router.get('/reservar', [injectUser, injectHotels], reservar)
router.post('/reservar', [injectUser, injectHotels], checkReserva)

router.get('/reservas', [injectUser, onlyAdmin, injectReservas, injectHotels], reservas)

router.get('/estadias', [injectUser, injectEstadia, injectHotels], estadia)

router.get('/funcionario', [injectUser, onlyAdmin, injectHotels], funcionario)
router.post('/funcionario', [injectUser, onlyAdmin, injectHotels], admitirFuncionario)
router.post('/funcionario/demitir', [injectUser, onlyAdmin, injectHotels], demitirFuncionario)

router.post('/reserva/aprovar/:codigo', [injectUser, onlyAdmin], aceitarReserva)
router.post('/reserva/rejeitar/:codigo', [injectUser, onlyAdmin], rejeitarReserva)

router.post('/servico/novo-servico', novoServico)

router.get('*', home);

export default router



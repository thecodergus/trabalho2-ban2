import { Request, Response, Router } from "express"
import { Administracao as controller } from "../controllers"
import { fornecer_hoteis, fornecer_reservas } from "../middleware"

const router = Router()

router.get("/funcionario", [fornecer_hoteis], controller.funcionario_page)
router.post("/funcionario", controller.cadastrar_funcionario) // Cadastrar novo funcionario
router.post("/funcionario/demitir", controller.demitir_funcionario)

router.get("/reservas", [fornecer_reservas], controller.reservas_page) // Ver todas as reservas
router.post("/reservas/aprovar", controller.aprovar_reserva)
router.post("/reservas/rejeitar", controller.reprovar_reserva)

export default router
import { Request, Response, Router } from "express"
import { Administracao as controller } from "../controllers"
import { fornecer_hoteis } from "../middleware"

const router = Router()

router.get("/funcionario", [fornecer_hoteis], controller.funcionario_page)
router.post("/funcionario", controller.cadastrar_funcionario) // Cadastrar novo funcionario
router.post("/funcionario/demitir", controller.demitir_funcionario)

router.get("/reservas") // Ver todas as reservas
router.post("/reservas/aprovar/:id")
router.post("/reservas/rejeitar/:id")

export default router
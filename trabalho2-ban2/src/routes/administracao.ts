import { Request, Response, Router } from "express"
import { Administracao as controller } from "../controllers"

const router = Router()

router.get("/funcionario", controller.funcionario_page)
router.post("/funcionario", controller.cadastrar_funcionario) // Cadastrar novo funcionario
router.post("/funcionario/demitir")

router.get("/reservas") // Ver todas as reservas
router.post("/reservas/aprovar/:id")
router.post("/reservas/rejeitar/:id")

export default router
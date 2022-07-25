import { Request, Response, Router } from "express";
import { Conta as controller, Reserva as controller2 } from "../controllers"
import passport from "passport";
import { isNotAuthenticated, isAuthenticated } from "../middleware";

const router = Router()

router.get("/login", [isNotAuthenticated], controller.login_screen)

router.post("/login", [isNotAuthenticated], controller.login)

router.get("/logout", [isAuthenticated], controller.logout)

router.get("/cadastro", [isNotAuthenticated], controller.cadastro_screen)
router.post("/cadastro", [isNotAuthenticated], controller.cadastro)

router.get("/reservas", [isAuthenticated], controller2.reservas_page)

export default router
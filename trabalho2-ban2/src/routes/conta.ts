import { Request, Response, Router } from "express";
import { Conta as controller } from "../controllers"
import passport from "passport";
import { isNotAuthenticated, isAuthenticated } from "../middleware";

const router = Router()

router.get("/login", [isNotAuthenticated], controller.login_screen)

router.post("/login", [isNotAuthenticated], controller.login)

router.get("/logout", [isAuthenticated], controller.logout)

router.get("/cadastro", [isNotAuthenticated], controller.cadastro_screen)
router.post("/cadastro", [isNotAuthenticated], controller.cadastro)

router.get("/conta/reservas", [isAuthenticated], (req: Request, res: Response) => res.send("OI"))

export default router
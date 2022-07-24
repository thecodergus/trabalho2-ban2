import { Request, Response, Router } from "express";
import { Conta as controller } from "../controllers"
import passport from "passport";
import { isNotAuthenticated, isAuthenticated } from "../middleware";

const route = Router()

route.get("/login", [isNotAuthenticated], controller.login_screen)

route.post("/login", [isNotAuthenticated], controller.login)

route.get("/logout", [isAuthenticated], controller.logout)

route.get("/cadastro", [isNotAuthenticated], controller.cadastro_screen)
route.post("/cadastro", [isNotAuthenticated], controller.cadastro)

export default route
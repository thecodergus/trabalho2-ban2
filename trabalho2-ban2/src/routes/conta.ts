import { Request, Response, Router } from "express";
import { Conta as controller } from "../controllers"
import passport from "passport";

const route = Router()

route.get("/login", controller.login_screen)

route.post("/login", controller.login)

route.get("/logout", controller.logout)

route.get("/cadastro", controller.cadastro_screen)
route.post("/cadastro", controller.cadastro)

export default route
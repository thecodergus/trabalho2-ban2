import { Router } from "express";
import { Conta as controller } from "../controllers"

const route = Router()

route.get("/login", controller.login_screen)
route.post("/login", controller.login)

route.get("/logout", controller.logout)

route.get("/cadastro", controller.cadastro_screen)
route.post("/cadastro", controller.cadastro)

export default route
import { Router } from "express";
import { Conta as controller } from "../controllers"

const route = Router()

route.get("/login", controller.login_screen)

export default route
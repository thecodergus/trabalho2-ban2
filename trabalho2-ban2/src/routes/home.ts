import { Router } from "express";
import {Home as controller} from "../controllers"

const route = Router()

route.get("/home", controller.home)

route.get("*", controller.resto)

export default route
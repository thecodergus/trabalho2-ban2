import { Router } from "express";
import {Home as controller} from "../controllers"

const route = Router()

route.get("*", controller.home)

export default route
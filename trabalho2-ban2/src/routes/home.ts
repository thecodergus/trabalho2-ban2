import { Router } from "express";
import {Home as controller} from "../controllers"

const route = Router()

route.get("/home", controller.home)

route.post("/procurar", (req, res, next) => res.redirect("/home"))

route.get("*", controller.resto)
// route.post("*", controller.resto)
// route.put("*", controller.resto)
// route.delete("*", controller.resto)

export default route
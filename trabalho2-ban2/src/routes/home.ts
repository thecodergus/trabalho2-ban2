import { Router } from "express";
import {Home as controller, Reserva as controller2} from "../controllers"
const router = Router()

router.get("/home", controller.home)

router.get("/reservar", controller2.reserva_page)

router.post("/procurar", (req, res, next) => res.redirect("/home"))

// route.get("*", controller.resto)
// route.post("*", controller.resto)
// route.put("*", controller.resto)
// route.delete("*", controller.resto)

export default router
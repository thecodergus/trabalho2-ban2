import { Router } from "express";
import { isAuthenticated } from "../middleware";
import {Home as controller, Reserva as controller2} from "../controllers"
const router = Router()

router.get("/home", controller.home)

router.get("/reservar", [isAuthenticated], controller2.reserva_page)
router.post("/reservar", [isAuthenticated], controller2.fazer_reserva)

router.post("/procurar", (req, res, next) => res.redirect("/home"))

// route.get("*", controller.resto)
// route.post("*", controller.resto)
// route.put("*", controller.resto)
// route.delete("*", controller.resto)

export default router
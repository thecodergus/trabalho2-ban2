import { Router } from "express";

import {Hotel as controller} from "../controllers"


const route = Router()

route.get("/:id", controller.hotel_page)

export default route
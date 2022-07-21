import { Router } from "express";

import IndexController from "../controllers/index"

const route = Router()

route.get("*", IndexController.all)

export default route
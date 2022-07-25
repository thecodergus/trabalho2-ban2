import type { Request as Req, Response as Res } from "express"
import {Hotel} from "../models"

class Reserva{
    public async reserva_page(req: Req, res: Res){
        return res.render("reservar", {
            hoteis: await Hotel.find().populate("cidade").lean()
        })
    }
}

export default new Reserva
import type {Request as Req, Response as Res, NextFunction as Next} from "express"
import {Hotel as MHotel} from '../models'

class Hotel{
    public async hotel_page(req: Req, res: Res){
        const { id } = await req.params
        const hotel = await await MHotel.findById(id).lean() || {}

        if(hotel){
            return res.render("hotel", {
                hotel: hotel
            })
        }else{
            return res.render("error", {
                error: {
                    title: "Error",
                    message: "Hotel não encontrado"
                }
            })
        }
    }
}


export default new Hotel

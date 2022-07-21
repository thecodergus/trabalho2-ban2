import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { connect } from "../config/connection"
import Hotel from "../models/Hotel";
import type { Catcher, IHotel } from "../types"

class HotelController{

    private catcher: Catcher

    constructor(catcher: Catcher){
        this.catcher = catcher
    }
    
    // Post
    public async criar_hotel(req: Req, res: Res) {
        const { Hotel } = await connect()

        // return res.json(await Hotel.create(req.body).catch(this.catcher))
        return res.json(await Hotel.create(req.body))
    }

    // Get ALL
    public async get_hoteis(req: Req, res: Res){
        const { Hotel } = await connect()

        return res.json(await Hotel.find({}).select({"_id": 1, "nome": 1}))
    }
}

export default HotelController
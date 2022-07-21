import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { connect } from "../config/connection"

class HotelController{

    private res: Res

    constructor(res: Res){
        this.res = res
    }
    
    // Post
    public async criar_hotel(req: Req, res: Res) {
        const { Hotel } = await connect()

        return res.json(await Hotel.create(req.body).catch((err: Error) => this.res.status(400).json({ err })))
    }

    // Get ALL
    public async get_hoteis(req: Req, res: Res){
        const { Hotel } = await connect()

        return res.json(await Hotel.find({}).select({ "_id": 1, "nome": 1 }))
    }


    // Get with id
    public async get_hotel(req: Req, res: Res){
        const {id} = req.query
        const { Hotel } = await connect()

        return res.json(await Hotel.find({ "_id": id }))
    }
}

export default HotelController
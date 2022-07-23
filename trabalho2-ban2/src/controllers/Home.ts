import type {Request as Req, Response as Res} from "express"
import type {Catcher} from "../types"

import { get_all_hotel_nome } from "../services"

class Home{

    private catcher: Catcher = (err: Error, res: Res) => res.status(400).json({ err })

    public async home(req: Req, res: Res){
        // this.get_nome_hoteis()
        return res.render("home", {
            hoteis: await get_all_hotel_nome(),
            usuario: "Gustavo",
            user: req.user,
            logged: req.isAuthenticated()
        })
    }

    public resto(req: Req, res: Res){
        return res.redirect("/home")
    }

}

export default new Home
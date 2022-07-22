import type {Request as Req, Response as Res} from "express"
import {Hotel} from "../models"
import type {Catcher} from "../types"

class Home{

    private catcher: Catcher = (err: Error, res: Res) => res.status(400).json({ err })

    public async home(req: Req, res: Res){
        // this.get_nome_hoteis()
        return res.render("home", {
            hoteis: await Hotel.find().select({_id: true, nome: true}).lean() || {},
            usuario: "Gustavo"
        })
    }

    public resto(req: Req, res: Res){
        return res.redirect("/home")
    }

}

export default new Home
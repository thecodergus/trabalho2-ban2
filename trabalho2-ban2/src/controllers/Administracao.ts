import type { Request as Req, Response as Res } from "express"
import { Usuario_Empregado } from "../models"
import { get_all_hotel_nome } from "../services"
import { IUsuario } from "types"

class Administracao{
    public async funcionario_page(req: Req, res: Res){
        const hoteis: any =  await get_all_hotel_nome()
        const funcionarios: any = await Usuario_Empregado.find({
            "data.hotel_id": req.user.data.hotel_id
        }).select({data: true}).lean() || {}

        if(!funcionarios) return res.render("error", {error: {title: "Error", message: "Error ao procurar funcionario"}})


        return res.render("funcionario", {
                                hoteis: await hoteis,
                                funcionarios: await funcionarios
                            }) 
    } 
}

export default new Administracao
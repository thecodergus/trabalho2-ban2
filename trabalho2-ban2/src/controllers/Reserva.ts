import type { Request as Req, Response as Res } from "express"
import {Hotel, Reserva as MReserva} from "../models"
import validator from "validator"

class Reserva{
    public async reserva_page(req: Req, res: Res){
        return res.render("reservar", {
            hoteis: await Hotel.find().populate("cidade").lean()
        })
    }

    public async reservas_page(req: Req, res: Res){
        return res.render("reservas", {
            reservas: await MReserva.find({cliente_id: (req.user as any)._id}).lean()
        })
    }

    public async fazer_reserva(req: Req, res: Res){
        const { hotel, cod_quarto, cama_extra, date_checkin, date_checkout } = req.body
        const {_id} = req.user as any

        const check: boolean[] = [
            validator.isEmpty(hotel),
            validator.isEmpty(cod_quarto)
        ]

        if(check.some(i => i)){
            return res.render("reservar", {
                error: {
                    title: "Error",
                    message: "Selecione corretamente"
                }
            })
        }

        const quarto: any = await (await Hotel.findById(hotel).lean()).quartos.filter((item: any) => item._id === cod_quarto)[0]
        
        try{
            await MReserva.create({
                hotel_id: hotel,
                cliente_id: _id,
                quarto,
                check_in: date_checkin,
                check_out: date_checkout,
                cama_extra,
                status: "em aguardo"
            })

            return res.redirect("/conta/reservas")
        }catch(e: any){
            return res.render("reservar", {
                error: {
                    title: "Error",
                    message: "Selecione corretamente"
                }
            }) 
        }

    }
}

export default new Reserva
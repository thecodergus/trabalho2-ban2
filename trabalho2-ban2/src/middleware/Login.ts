import type { Request as Req, Response as Res, NextFunction } from "express"

export const esta_logado = (req: Req, res: Res, next: NextFunction) => {
    if(req.sessionID){
        return next()
    }else{
        return res.render("error", {
            title: "Usuario não autenticado",
            message: "<a href='/conta/login'>Se autentique</a>"
        })
    }
}
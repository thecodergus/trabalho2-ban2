import type { Request as Req, Response as Res, NextFunction as Next } from "express"

export const esta_logado = (req: Req, res: Res, next: Next) => {
    if(req.sessionID){
        return next()
    }else{
        return res.render("error", {
            title: "Usuario não autenticado",
            message: "<a href='conta/login'>Se autentique</a>"
        })
    }
}
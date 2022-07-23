import { Request, Response, NextFunction } from "express"

export const verificar_login = async (req: Request, res: Response, next: NextFunction) => {
    if(await req.isAuthenticated()){
        return next()
    }else{
        return res.render("error", {
            title: "Usuario não autenticado",
            message: "<a href='conta/login'>Se autentique</a>"
        })
    }
}
import { Request, Response, NextFunction } from "express"
import { IUsuario } from "../types";

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

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect("/login");
}

export const isNotAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        return next();
    }

    return res.redirect("/home");
}

export const isEmpregado = (req: Request, res: Response, next: NextFunction) => {
    if(req.user.empregado){
        return next()
    }

    return res.redirect("/home")
}

export const fornecer_parametros_comuns = (req: Request, res: Response, next: NextFunction) => {
    res.locals.user = req.user
    res.locals.logged = req.isAuthenticated()
    return next()
}
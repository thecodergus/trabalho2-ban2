import type { Request as Req, Response as Res } from "express"
import type { Catcher } from "../types"
import validator from "validator"

class Login{
    public async login_screen(req: Req, res: Res){
        res.render("login", {
            session: req.session
        })
    }

    public async login(req: Req, res: Res){
        const email: string = req.body.email || undefined
        const password: string = req.body.password || undefined

        const check: boolean[] = [
            email === undefined,
            password === undefined,
            !validator.isEmail(email)
        ]
        
        if(check.some(item => item)){
            return res.render("login", {
                error: {
                    title: "Erro de login",
                    message: "E-mail ou senha incorretos"
                }
            })
        }


        req.session.loggedIn = true
        // req.session.user = {
        //     funcionario: false,
        //     _id: "qualquer-coisa",
        //     nome: "Gustavo",
        // }

        return res.redirect("/home")
    }

    public async logout(req: Req, res: Res){
        req.session.loggedIn = false
        req.session.destroy(err => res.render("error", {title: "Erro com logout", message: err}))

        return res.redirect("/home")
    }

    public async cadastro_screen(req: Req, res: Res){
        return res.render("cadastro", {
            session: req.session
        })
    }

    public async cadastro(req: Req, res: Res){
        return res.redirect("/home")
    }
}

export default new Login
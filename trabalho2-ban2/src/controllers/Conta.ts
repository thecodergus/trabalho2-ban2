import type { NextFunction as Next, Request as Req, Response as Res } from "express"
import type { Catcher, IUsuario } from "../types"
import validator from "validator"
import passport from "passport"
import { IVerifyOptions } from "passport-local"
import { Usuario } from "../models"

class Login{
    public async login_screen(req: Req, res: Res){
        res.render("login", {
            session: req.session
        })
    }

    public async login(req: Req, res: Res, next: Next){
        const email: string = req.body.email || undefined
        const password: string = req.body.password || undefined

        const check: boolean[] = await [
            email.trim() === "",
            password.trim() === "",
            !validator.isEmail(email)
        ]
        
        if(await check.some(item => item)){
            return res.render("login", {
                error: {
                    title: "Erro de login",
                    message: "E-mail ou senha incorretos"
                }
            })
        }

        // Gambiarra
        req.body.username = await email
        req.body.password = await password
        passport.authenticate("local", (err: Error, user: IUsuario, info: IVerifyOptions) => {
            if(err) next(err)
            if(!user){
                res.redirect("/login")
            }

            req.logIn(user, err => {
                if(err) return next(err)
                return res.redirect("/home")
            })
        })(req, res, next)
    }

    public async logout(req: Req, res: Res, next: Next){
        await req.logout((err: Error) => {
            if(err) return next(err)
        })

        return res.redirect("/home")
    }

    public async cadastro_screen(req: Req, res: Res){
        return res.render("cadastro", {
            user: req.user,
            logged: req.isAuthenticated()
        })
    }

    public async cadastro(req: Req, res: Res, next: Next){
        const {
            email,
            name,
            cpf,
            password,
            passwordConfirmation,
            telephone,
            adress,
        } = req.body

        const cpf_regex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/

        const check: boolean[] = [
            validator.isEmpty(email),
            validator.isEmpty(name),
            validator.isEmpty(cpf),
            validator.isEmpty(password),
            validator.isEmpty(passwordConfirmation)
        ]

        if(check.some(i => i)){
            return res.render("cadastro", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Preencha todos os campos obgrigatorios(e-mail, nome, cpf, senha e confirmação de senha)"
                }
            })
        }else if(!validator.isEmail(email)){
            return res.render("cadastro", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "E-mail invalido"
                }
            })
        } else if (password !== passwordConfirmation){
            return res.render("cadastro", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Digite senha e confirmação de senha iguais!"
                }
            })
        }else if (!validator.matches(cpf, cpf_regex)){
            return res.render("Cadastro", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Cpf invalido"
                }
            })
        }

        const usuario: any = new Usuario({
            email,
            senha: password,
            data: {
                nome: name,
                cpf,
                telefone: telephone,
                endereco: adress
            }
        })

        try{
            await usuario.save()

            // Gambiarra
            req.body.username = await email
            req.body.password = await password
            passport.authenticate("local", (err: Error, user: IUsuario, info: IVerifyOptions) => {
                if (err) next(err)
                if (!user) {
                    res.redirect("/login")
                }

                req.logIn(user, err => {
                    if (err) return next(err)
                    return res.redirect("/home")
                })
            })(req, res, next) 
            
            
        }catch(err: any){
            return res.render("cadastro", {
                error: {
                    title: "Error",
                    message: err
                }
            })
        }
        

        
    }
}

export default new Login
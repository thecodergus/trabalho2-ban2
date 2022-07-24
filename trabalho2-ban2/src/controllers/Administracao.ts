import type { Request as Req, Response as Res } from "express"
import { Usuario_Empregado } from "../models"
import { get_all_hotel_nome } from "../services"
import validator from "validator"

class Administracao{
    public async funcionario_page(req: Req, res: Res){
        const funcionarios: any = await Usuario_Empregado.find().populate({path: "data.hotel_id", select: "_id nome"}).select({ data: true }).lean()

        if(!funcionarios) return res.render("error", {error: {title: "Error", message: "Error ao procurar funcionario"}})

        return res.render("funcionario", {
                                funcionarios: await funcionarios
                            }) 
    }

    public async cadastrar_funcionario(req: Req, res: Res){
        const { nome, hotel, funcao, email, senha, senha_confirmar, endereco } = req.body

        const check: boolean[] = [
            validator.isEmpty(email),
            validator.isEmpty(nome),
            validator.isEmpty(hotel),
            validator.isEmpty(senha),
            validator.isEmpty(senha_confirmar),
            validator.isEmpty(funcao)
        ]

        if(check.some(i => i)){
            return res.render("funcionario", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Preencha todos os campos obgrigatorios(e-mail, nome, cpf, senha e confirmação de senha)"
                },
            })
        }else if(!validator.isEmail){
            return res.render("funcionario", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "E-mail invalido"
                },
            })
        }else if(senha !== senha_confirmar){
            return res.render("funcionario", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Digite senha e confirmação de senha iguais!"
                },
            })
        }


        try{
            await Usuario_Empregado.create({
                email,
                senha,
                empregado: true,
                data: {
                    hotel_id: hotel,
                    nome,
                    funcao: [funcao]
                }
            })

            return res.redirect("funcionario")

        }catch(e: any){
            return res.render("funcionario", {
                error: {
                    title: "Aconteceu algum problema",
                    message: "Rolo alguma treta cadastrando funcionario"
                }
            })
        }
    }


    public async demitir_funcionario(req: Req, res: Res){
        const {_id} = req.body

        try{

            await Usuario_Empregado.deleteOne({_id: _id})

            return res.redirect("./")
        }catch(e: any){
            return res.render("funcionario", {
                error: {
                    title: "Error",
                    message: "Algum problema ao demitir o funcionario"
                }
            })
        }
    }
}

export default new Administracao
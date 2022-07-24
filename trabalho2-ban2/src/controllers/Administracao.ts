import type { Request as Req, Response as Res } from "express"
import { Usuario_Empregado } from "../models"
import { get_all_hotel_nome } from "../services"
import { IUsuario } from "types"
import validator from "validator"

class Administracao{
    public async funcionario_page(req: Req, res: Res){
        const hoteis: any =  await get_all_hotel_nome()
        const funcionarios: any = await (await Usuario_Empregado.find().populate({path: "data.hotel_id", select: "_id nome"}).select({ data: true }).lean() as any[]).map(f => f.data)

        if(!funcionarios) return res.render("error", {error: {title: "Error", message: "Error ao procurar funcionario"}})


        console.log(funcionarios)
        return res.render("funcionario", {
                                hoteis: await hoteis,
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
                hoteis: await get_all_hotel_nome()
            })
        }else if(!validator.isEmail){
            return res.render("funcionario", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "E-mail invalido"
                },
                hoteis: await get_all_hotel_nome()
            })
        }else if(senha !== senha_confirmar){
            return res.render("funcionario", {
                error: {
                    title: "Preencha os campos corretamente",
                    message: "Digite senha e confirmação de senha iguais!"
                },
                hoteis: await get_all_hotel_nome()
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
                },
                hoteis: await get_all_hotel_nome()
            })
        }
    }
}

export default new Administracao
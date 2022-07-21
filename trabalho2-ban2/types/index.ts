import { Document } from "mongoose"

export interface ResponseFuncs{
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface ICidade extends Document { 
    nome: string
    uf: string
}

export interface IHotel extends Document { 
    nome: string
    endereco: string
    telefone: string
    cidade: ICidade
    empregado: [IEmpregado]
    cliente: [ICliente]
    quartos: [IQuarto]
} 

export interface IUsuario extends Document{
    email: string
    senha: string
    compararSenhas(senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void
}

export interface IEmpregado extends IUsuario { 
    nome: string
    endereco: string
    telefone: string
    funcao: [string]
}

export interface ICliente extends IUsuario {
    nome: string
    cpf: string
    endereco: string
    telefone: string
}

export interface IQuarto extends Document{
    tipo_quarto: string
    numerdo: number
    andar: number
    preco_pernoite: number
}
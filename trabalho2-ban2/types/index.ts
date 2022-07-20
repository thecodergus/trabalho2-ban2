import { Document, SchemaDefinition } from "mongoose"

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

export interface IEmpregado extends Document { 
    nome: string
    endereco: string
    telefone: string
    funcao: [string]
}

export interface IHotel extends Document { 
    nome: string
    endereco: string
    telefone: string
    cidade: ICidade
    funcionarios: [IEmpregado]
} 

export interface IUsuario extends Document{
    email: string
    senha: string
    tipo: number
    compararSenhas(senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void
}
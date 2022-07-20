import { Document } from "mongoose"

export interface ResponseFuncs{
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Cidade {
    nome: string
    uf: string
}

export interface IUsuario extends Document{
    email: string
    senha: string
    tipo: number
    compararSenhas(senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void
}
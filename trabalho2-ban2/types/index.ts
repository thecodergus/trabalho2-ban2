import { Document } from "mongoose"

export interface ResponseFuncs{
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

// Feito
export interface ICidade extends Document {
    _id: string
    nome: string
    uf: string
}

// Feito
export interface IHotel extends Document { 
    _id: string
    nome: string
    endereco: string
    telefone: string
    cidade: ICidade
    empregado: [IEmpregado]
    cliente: [ICliente]
    quartos: [IQuarto]
} 

// Feito
export interface IUsuario extends Document{
    _id: string
    email: string
    senha: string
    compararSenhas(senhaCandidata: string, next: (err: Error | null, same: boolean | null) => void): void
}

// Feito
export interface IEmpregado extends Document {
    _id: string
    credencial: IUsuario
    nome: string
    endereco: string
    telefone: string
    funcao: [string]
}

// Feito
export interface ICliente extends Document {
    _id: string
    credencial: IUsuario
    nome: string
    cpf: string
    endereco: string
    telefone: string
    reservas: [IReserva]
    estadias: [IEstadia]
}

// Feito
export interface IQuarto extends Document{
    _id: string
    tipo: string
    numero: number
    andar: number
    preco_pernoite: number
}

// Feito
export interface IReserva extends Document{
    _id: string
    quarto: IQuarto
    check_in: Date
    check_out: Date
    dia_reserva: Date
    cama_extra: boolean
    valor_total: number
    valor_entrada: number
    status: string
}

export interface IEstadia extends Document{
    _id: string
    quarto: IQuarto
    check_in: Date
    check_out: Date
    valor: number
    servicos: [IServico]
}

// Feito
export interface IServico extends Document{
    _id: string
    empregado: {
        _id: string
        nome: string
    }
    valor: number
    dia: Date
    descricao: string
}

export type Catcher = (err: Error) => void
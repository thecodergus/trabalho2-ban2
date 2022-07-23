import { Hotel} from "../src/models"
import mongoose from "mongoose"
import { Usuario_Cliente, Usuario_Empregado, Usuario } from "../src/models"
import { IUsuario } from "types"
import { NextFunction } from "express"

const mongo_url: string = `mongodb://ban2:trabalho@localhost:27017`
mongoose
    .connect(mongo_url)
    .then(() => console.log("Conectado ao mongo"))
    .catch(err => console.error(`Deu problema:\n${err}`))

const random: number = Math.random() * 500000

// Hotel.create({
//     nome: `Grão Rei Principe${random}`,
//     cidade: {
//         nome: "joinville",
//         uf: "sc"
//     }
// }).then(e => console.log(e)).catch(err => console.error(err))

// Usuario_Cliente.create({
//     email: `guga.power${random}@hotmail.com`,
//     senha: "lobolobolobo",
//     data: {
//         nome: "Gustavo",
//         cpf: "10865163979",
//         endereco: "Rua Professor Schutzler",
//         telefone: "992166025"
//     }
// }).then(r => console.log(r)).catch(err => console.error(err))

// Usuario_Empregado.create({
//     email: `guga.power${random}@hotel.com`,
//     senha: "lobolobo",
//     empregado: true,
//     data: {
//         hotel_id: "d305a42b-d5db-4b75-a1f0-f0806cd72913",
//         nome: "Gustavo",
//         endereco: "Rua Professor Schutzler",
//         telefone: "992166025",
//         funcao: [
//             "Fazer café",
//             "Programar",
//             "Dormir"
//         ]
//     }
// }).then(e => console.log(e)).catch(err => console.error(err))

async function testando() {
    const user = await Usuario.findOne({ email: 'guga.power81120.2079927531@hotel.com'})

    const senha: string = "lobolobo"
    const compare: boolean = await user.compararSenhas(senha)

    if(compare){
        console.log("Mesma senha")
    }else{
        console.log("Senhas diferentes")
    }

    // console.log(await user.compararSenhas(senha))

    // console.log(user)
}


testando()

// Usuario.findOne({ email: 'guga.power81120.2079927531@hotel.com'}, (err: any, user: any) => {
//     console.log(user)
// })



// {
//   data: {
//     hotel_id: 'd305a42b-d5db-4b75-a1f0-f0806cd72913',
//     nome: 'Gustavo',
//     endereco: 'Rua Professor Schutzler',
//     telefone: '992166025',
//     funcao: [ 'Fazer café', 'Programar', 'Dormir' ]
//   },
//   email: 'guga.power81120.2079927531@hotel.com',
//   senha: '$2a$04$cnA6VfIpojlnPSjlNpOVQO4LekDhvj4Qtz5Dd36Eh0Mlx/TsTGMMa',
//   empregado: true,
//   __t: 'Usuario_Empregado',
//   _id: '481314f7-7716-414d-8e34-b143e8998462',
//   __v: 0
// }
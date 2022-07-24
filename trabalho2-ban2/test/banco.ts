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
//     nome: `Hotel Udesc`,
//     cidade: {
//         nome: "joinville",
//         uf: "sc"
//     }
// }).then(e => console.log(e)).catch(err => console.error(err))
// Hotel.create({
//     nome: `Hotel Grão Principe`,
//     cidade: {
//         nome: "Araquari",
//         uf: "sc"
//     }
// }).then(e => console.log(e)).catch(err => console.error(err))
// Hotel.create({
//     nome: `Hotel Fumaça`,
//     cidade: {
//         nome: "São Paulo",
//         uf: "sp"
//     }
// }).then(e => console.log(e)).catch(err => console.error(err))

// Usuario_Cliente.create({
//     username: `guga.power${random}@hotmail.com`,
//     password: "lobolobolobo",
//     data: {
//         nome: "Gustavo",
//         cpf: "10865163979",
//         endereco: "Rua Professor Schutzler",
//         telefone: "992166025"
//     }
// }).then(r => console.log(r)).catch(err => console.error(err))

// Usuario_Empregado.create({
//     email: `adm@hotel.com`,
//     senha: "adm",
//     empregado: true,
//     data: {
//         hotel_id: "2d28b6ad-fe60-4a58-9500-0be74c8556d9",
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

// async function testando() {
//     const user = await Usuario.findOne({ username: 'guga.power81120.2079927531@hotel.com'})

//     const password: string = "lobolobo"
//     const compare: boolean = await user.compararSenhas(password)

//     if(compare){
//         console.log("Mesma password")
//     }else{
//         console.log("passwords diferentes")
//     }

//     // console.log(await user.compararpasswords(password))

//     // console.log(user)
// }


// testando()

// Usuario.findOne({ username: 'guga.power81120.2079927531@hotel.com'}, (err: any, user: any) => {
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
//   username: 'guga.power81120.2079927531@hotel.com',
//   password: '$2a$04$cnA6VfIpojlnPSjlNpOVQO4LekDhvj4Qtz5Dd36Eh0Mlx/TsTGMMa',
//   empregado: true,
//   __t: 'Usuario_Empregado',
//   _id: '481314f7-7716-414d-8e34-b143e8998462',
//   __v: 0
// }


async function t(){
    const u: any = await Usuario
                            .findById("2fdd1e9c-c34a-4b8d-8ae2-bac17785843f")
                            .populate({
                                path: "data.hotel_id",
                                select: "_id nome"
                            })
    console.log(u)
}

t()
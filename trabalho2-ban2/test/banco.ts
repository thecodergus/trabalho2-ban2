import { Hotel} from "../src/models"
import mongoose from "mongoose"
import { Usuario_Cliente, Usuario_Empregado } from "../src/models/Usuario"

const mongo_url: string = `mongodb://ban2:trabalho@localhost:27017`
mongoose
    .connect(mongo_url)
    .then(() => console.log("Conectado ao mongo"))
    .catch(err => console.error(`Deu problema:\n${err}`))

const random: number = Math.random() * 500000

Hotel.create({
    nome: `Grão Rei Principe${random}`,
    cidade: {
        nome: "joinville",
        uf: "sc"
    }
}).then(e => console.log(e)).catch(err => console.error(err))

Usuario_Cliente.create({
    email: `guga.power${random}@hotmail.com`,
    senha: "lobo",
    data: {
        nome: "Gustavo",
        cpf: "10865163979",
        endereco: "Rua Professor Schutzler",
        telefone: "992166025"
    }
}).then(r => console.log(r)).catch(err => console.error(err))

Usuario_Empregado.create({
    email: `guga.power${random}@hotel.com`,
    senha: "lobo",
    empregado: true,
    data: {
        hotel_id: "d305a42b-d5db-4b75-a1f0-f0806cd72913",
        nome: "Gustavo",
        endereco: "Rua Professor Schutzler",
        telefone: "992166025",
        funcao: [
            "Fazer café",
            "Programar",
            "Dormir"
        ]
    }
}).then(r => console.log(r)).catch(err => console.error(err))

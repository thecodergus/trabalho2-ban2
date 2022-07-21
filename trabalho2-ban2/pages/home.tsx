import CHotel from "../components/Hotel"
import { connect } from "../config/connection" 
import type {IHotel} from "../types"

type Hotel = {
    _id: string
    nome: string
}

type Props = {
    dataHoteis: [Hotel]
}

export default function Home(props: Props){
    return (
        <>
            <main className="main" style={{ maxWidth: "1200px" }}>
                <section className="descricao" id="desc">
                    <h2>
                        Se você está procurando por:
                    </h2>

                    <ul id="lista">
                        <li>Descanso</li>
                        <li>Qualidade</li>
                        <li>Conforto</li>
                    </ul>
                    <br />
                    <h3>
                        Aqui é o local ideal para você, explore as cidades e faça sua reserva!
                    </h3>
                    <form className="form" action="/" method="post">
                        <div className="form-control">
                            {/*
                        <label htmlFor="cidades">Cidade</label>
                        <select name="cod_cidade" id="cidades">
                             <% for (cidade of cidades) { %>
                            <option value="<%= cidade.cod_cidade %>">
                                <%= cidade.nome %>
                            </option>
                        <% } %>
                            </select> */}
                        </div>
                        <button type="submit">Procurar Hotéis</button>
                    </form>
                </section>
            </main>
            {
                props.dataHoteis.map((item: Hotel, index: number) => <CHotel key={index} _id={item._id} nome={item.nome} />)
            }
        </>
    )
}

export async function getServerSideProps() {
    const { Hotel } = await connect()

    const dataHoteis = await Hotel.find({}).select({_id: true, nome: true}).lean()

    return {
        props: {
            dataHoteis
        }
    }
}
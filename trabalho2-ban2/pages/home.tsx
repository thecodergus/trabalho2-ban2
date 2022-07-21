export default function Home(){
    return (
        <main className="main" style={{maxWidth: "1200px"}}>
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
    )
}
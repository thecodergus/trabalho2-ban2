export default function Nav(){
    return (
        <nav>
            <ol className="categorias">
                {/* <% if (!loggedIn || usuario.tipo === 0) { %>
                <% for (const hotel of hotelList) { %>
                    <li>
                        <a href="/hotel/<%= hotel.cod_interno %>"> <%= hotel.nome %> </a>
                    </li>
                <% } %>
                    <% } else { %>
                <li> <a href="/reservas"> Reservas </a> </li>
                <li> <a href="/funcionario"> Funcionários </a> </li>
            <% } %>

                    <% if (loggedIn) { %>
                <% if (usuario.tipo === 0) { %>
                    <div class="login">
                        <a href="/estadias">&nbsp Minha Estadia &nbsp</a>
                    </div>
                <% } %>
                    <div class="cadastro">
                        <a href="/logout">&nbsp Sair &nbsp</a>
                    </div>
                    <% } else { %>
                <div class="login">
                    <a href="/login">&nbsp Entrar &nbsp</a>
                </div>
                <div class="cadastro">
                    <a href="/cadastro">&nbsp Cadastre-se &nbsp</a>
                </div>
            <% } %> */}
                </ol>
            </nav>
    )
}
import Link from 'next/link'

export default function Header() {

    return (
        <header>
            <Link href='/'>
                <a color="white">
                    <h1>
                        {/* <%= locals.loggedIn ? `Bem vindo, ${usuario.nome}` : 'Rede de Hotéis Prime SC' %> */}
                        Bem vindo, usuario.nome
                    </h1>
                </a>
            </Link>
        </header>
    )
}
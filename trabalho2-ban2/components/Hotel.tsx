import Link from "next/link"

type Props = {
    _id: string,
    nome: string
}

export default function Hotel(props: Props){
    return (
        <div className="container">
            <div className="header">
                <Link href={`/hotel/${props._id}`}>
                    {`${props.nome}`}
                </Link>
            </div>
        </div>
    )
}
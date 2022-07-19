import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class Cidade{
    @ObjectIdColumn()
    cod_cidade: ObjectID

    @Column()
    nome: string

    @Column()
    uf: string

    constructor(nome: string, uf: string){
        this.nome = nome
        this.uf = uf
    }
}
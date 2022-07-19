import "reflect-metadata"
import { DataSource } from "typeorm"

const MyDataSource: DataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: "ban2",
    password: "trabalho2",
    database: "trabalho",
    logging: true,
    synchronize: true,
    entities: [
        "entity/*.ts"
    ],
    subscribers: [
        "subscriber/*.ts"
    ],
    migrations: [
        "migration/*.ts"
    ]
}
)

// https://newreleases.io/project/github/typeorm/typeorm/release/0.3.0
// https://github.com/typeorm/typeorm/issues/7428
export const connection: DataSource = await MyDataSource.initialize()
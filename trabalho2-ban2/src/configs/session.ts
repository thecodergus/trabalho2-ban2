import session from "express-session"
import MongoStore from "connect-mongo"
import { mongo_url } from "./mongoose"
import { v4 as uuid } from "uuid"

export default session({
                    store: MongoStore.create({ mongoUrl: mongo_url, dbName: "session" }),
                    secret: "Bando_de_dados_2",
                    genid: () => uuid(),
                    resave: false,
                    saveUninitialized: true,
                    rolling: true,
                    cookie: {
                        secure: false,
                        maxAge: (3600000 * 24) * 7
                    },
                })
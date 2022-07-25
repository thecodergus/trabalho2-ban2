import mongoose from "mongoose"

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_ANDRESS,
    MONGODB_PORT
} = process.env

// Conect database
export const mongo_url: string = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_ANDRESS}:${MONGODB_PORT}`

export default () => (
    mongoose
        .connect(mongo_url)
        .then(() => console.log("Conectado ao mongo"))
        .catch(err => console.error(`Deu problema:\n${err}`))
)
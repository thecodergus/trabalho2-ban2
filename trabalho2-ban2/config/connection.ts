import mongoose from "mongoose";
import allSchema from "../models"

const {DATABASE_URL} = process.env

export const connect = async () => {
    const conn = await mongoose
                            .connect(DATABASE_URL as string)
                            .catch(err => console.error(err))
    console.log("Mongoose Connection Established")

    return {conn, ...allSchema}
}

// https://dev.to/alexmercedcoder/building-a-full-stack-todo-list-with-mongodb-nextjs-typescript-2f75
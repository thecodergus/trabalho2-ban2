import type {Request, Response} from "express"

class Index {
    all(req: Request, res: Response){
        res.send("Ola Mundo")
    }
}

export default new Index
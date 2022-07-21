import type {Request as Req, Response as Res} from "express"

class Index {
    all(req: Req, res: Res){
        res.render("home")
    }
}

export default new Index
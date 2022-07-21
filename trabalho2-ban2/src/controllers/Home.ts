import type {Request as Req, Response as Res} from "express"

class Home{
    public home(req: Req, res: Res){
        return res.render("pages/home")
    }
}

export default new Home
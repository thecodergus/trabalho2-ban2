import type {Request as Req, Response as Res} from "express"

class Home{
    public home(req: Req, res: Res){
        return res.render("home")
    }
}

export default new Home
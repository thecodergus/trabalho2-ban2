import type { Request as Req, Response as Res } from "express"
import type { Catcher } from "../types"

class Login{
    public async login_screen(req: Req, res: Res){
        res.render("login", {
            session: req.session
        })
    }
}

export default new Login
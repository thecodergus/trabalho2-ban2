import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { ResponseFuncs } from "../../types";
import { connect } from "../../config/connection";

const handler = async (req: Req, res: Res) => {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const catcher = (err: Error) => res.status(400).json({err})

    const handleCase: ResponseFuncs = {
        GET: async (req: Req, res: Res) => {
            const { Cidade } = await connect()
            return res.json(await Cidade.find({}).catch(catcher))
        },

        POST: async (req: Req, res: Res) => {
            const {Cidade} = await connect()
            return res.json(await Cidade.create(req.body).catch(catcher))
        }
    }

    const response = handleCase[method]

    if(response){
        response(req, res)
    }else{
        return res.status(400).json({error: "Sem resposta para esta requisição"})
    }
}

export default handler
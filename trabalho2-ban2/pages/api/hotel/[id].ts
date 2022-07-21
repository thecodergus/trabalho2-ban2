import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { ResponseFuncs } from "../../../types";
import CHotel from "../../../controllers/Hotel"
import type { Catcher } from "../../../types";

const handler = async (req: Req, res: Res) => {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

    const controller = await new CHotel(res)

    const handleCase: ResponseFuncs = {
        GET: await controller.get_hotel,

        // POST: await controller.criar_hotel
    }

    const response = handleCase[method]

    if (response) {
        response(req, res)
    } else {
        return res.status(400).json({ error: "Sem resposta para esta requisição" })
    }
}

export default handler
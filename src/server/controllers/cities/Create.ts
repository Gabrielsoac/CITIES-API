/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

interface Icity {
    name : string
}

export const create = async (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Não Implementado");
}

export { Icity } 

/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IBodyProps {
    name : string
}

export const create = async (
    req: Request<{}, {}, IBodyProps>,
    res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Não Implementado");
}

export { IBodyProps } 

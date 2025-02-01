/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

interface Icity {
    name : string,
    state: string
}

interface Ifilter {
    filter?: string
}

export const create = async (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    res.status(StatusCodes.OK).send("sucess");
}

export { Icity, Ifilter } 

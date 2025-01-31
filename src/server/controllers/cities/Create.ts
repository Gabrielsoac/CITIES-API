/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";

import { StatusCodes } from 'http-status-codes';

interface Icity {
    name : string,
}

export const create = (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    res.status(StatusCodes.CREATED).send(req.body.name);
}
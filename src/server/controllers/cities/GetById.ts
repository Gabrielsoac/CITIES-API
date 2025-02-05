/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";

interface IParamsProps{
    id?: number
}

export const getById = async (req: Request<IParamsProps>, res: Response) => {

    console.log(req.params);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "não implementado"});
}

export { IParamsProps }


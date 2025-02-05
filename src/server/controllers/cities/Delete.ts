import { Request, Response } from "express";
import { IParamsProps } from "./GetById";
import { StatusCodes } from "http-status-codes";

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {

    console.log(req.params);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Não implementado"});
}
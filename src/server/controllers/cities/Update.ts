/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from 'express';
import { IBodyProps } from './Create';
import { IParamsProps } from './GetById';
import { StatusCodes } from 'http-status-codes';

export const updateById = (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {

    console.log(req.params);
    console.log(req.body);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Não implementado"});
}
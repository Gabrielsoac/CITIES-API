/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
   page?: number,
   limit?: number,
   filter?: string
}

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
}

export { IQueryProps }
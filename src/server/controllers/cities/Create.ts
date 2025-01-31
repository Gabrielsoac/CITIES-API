/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";

import * as yup from 'yup';

import { StatusCodes } from 'http-status-codes';

interface Icity {
    name : string,
}


const bodyValidation: yup.ObjectSchema<Icity> = yup.object()
    .shape({
        name: 
            yup.string()
            .required("Nome é obrigatório")
            .min(3, "Nome deve conter ao menos 3 caracteres"),
    });

export const create = async (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    let data: Icity | undefined = undefined;

    try {
        data = await bodyValidation.validate(req.body);
    } catch(error) {
        const yupError = error as yup.ValidationError;
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message
            }
        }); 
    }
    
    res.status(StatusCodes.CREATED).send(data);
}
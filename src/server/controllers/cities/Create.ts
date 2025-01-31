/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";

import * as yup from 'yup';

import { StatusCodes } from 'http-status-codes';

interface Icity {
    name : string,
    state: string
}

const bodyValidation: yup.ObjectSchema<Icity> = yup.object()
    .shape({
        name: 
            yup.string()
            .required()
            .min(3),
        state: 
            yup.string()
            .required()
            .min(3)
    });

export const create = async (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    let data: Icity | undefined = undefined;

    try {
        data = await bodyValidation.validate(
            req.body,
            { abortEarly: false}
        );
    } catch(e) {
        const yupError = e as yup.ValidationError;
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {

            if(!error.path){
                return;
            }

            errors[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: errors
            }
        }); 
    }
    
    res.status(StatusCodes.CREATED).send(data);
}
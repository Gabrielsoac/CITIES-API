import * as yup from 'yup';
import { Icity } from '../../../controllers/cities/Create';
import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

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

export const createBodyValidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(
            req.body,
            { abortEarly: false}
        );

        return next();

    } catch(e) {
        const yupError = e as yup.ValidationError;
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {

            if(!error.path){
                return;
            }

            errors[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST)
            .json({
                    errors:{default: errors}
            }
        ); 
    }
}
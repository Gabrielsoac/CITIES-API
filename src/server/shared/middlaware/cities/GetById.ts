import { validation } from '../Validation';
import { IParamsProps } from './../../../controllers/cities/GetById';
import * as Yup from 'yup';

const paramsValidation: Yup.ObjectSchema<IParamsProps> = 
    Yup.object().shape(
        {
            id: Yup.number().integer().required().moreThan(0),
        }
    );

const paramValidationData = {
    params: paramsValidation
}

export const getByIdValidation = validation(paramValidationData);
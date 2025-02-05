import { validation } from '../Validation';
import { IParamsProps } from './../../../controllers/cities/GetById';
import * as Yup from 'yup';

const paramValidation: Yup.ObjectSchema<IParamsProps> = 
    Yup.object().shape(
        {
            id: Yup.number().required().moreThan(0),
        }
    );

const paramValidationData = {
    params: paramValidation
}

export const getByIdValidation = validation(paramValidationData);
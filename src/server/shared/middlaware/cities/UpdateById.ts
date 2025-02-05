import * as Yup from 'yup';
import { IParamsProps } from '../../../controllers/cities/GetById';
import { IBodyProps } from '../../../controllers/cities/Create';
import { validation } from '../Validation';

const paramsValidation: Yup.ObjectSchema<IParamsProps> = Yup.object().shape(
    {
        id: Yup.number().integer().required().moreThan(0), 
    }
); 

const bodyValidation: Yup.ObjectSchema<IBodyProps> = Yup.object().shape(

    {
        name: Yup.string().required().nonNullable().min(3),
    }
); 

const validationData = {
    body: bodyValidation,
    params: paramsValidation
}

export const updateValidation = validation(validationData);



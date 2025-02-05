import * as Yup from 'yup';
import { IParamsProps } from '../../../controllers/cities/GetById';
import { validation } from '../Validation';

const paramsValidation: Yup.ObjectSchema<IParamsProps> = Yup.object().shape(

    {
        id: Yup.number().integer().required().moreThan(0),

    }
);

const paramsValidationData = {
    params: paramsValidation
}

export const deleteValidation = validation(paramsValidationData);




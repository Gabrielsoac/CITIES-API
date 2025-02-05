import * as yup from 'yup';
import { IBodyProps } from '../../../controllers/cities/Create';
import { validation } from '../Validation';

const bodyValidation: yup.ObjectSchema<IBodyProps> = yup.object()
    .shape({
        name: 
            yup.string()
            .required()
            .min(3),
    });

const fieldsValidation = {
    body: bodyValidation,
}

export const createValidation = validation(fieldsValidation);

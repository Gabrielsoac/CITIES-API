import * as yup from 'yup';
import { Icity, Ifilter } from '../../../controllers/cities/Create';
import { validation } from '../Validation';

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

const queryValidation: yup.ObjectSchema<Ifilter> = yup.object()
    .shape({
        filter:
            yup.string()
            .min(3)
})

const fieldsValidation = {
    body: bodyValidation,
    query: queryValidation
}

export const createValidation = validation(fieldsValidation);

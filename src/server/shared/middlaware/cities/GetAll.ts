import { IQueryProps } from '../../../controllers/cities/GetAll'
import { validation } from '../Validation'
import * as yup from 'yup';

const queryValidation: yup.ObjectSchema<IQueryProps> =
    yup.object()
    .shape(
        {
            page: yup.number().moreThan(0),
            limit: yup.number().moreThan(0),
            filter: yup.string()
        }
    );

const queryValidationData = {
    query: queryValidation
}

export const getAllValidation = 
    validation(queryValidationData);

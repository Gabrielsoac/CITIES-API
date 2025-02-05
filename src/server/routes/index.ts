import { Router } from 'express';

import { citiesController } from './../controllers';
import { getAllValidation } from '../shared/middlaware/cities/GetAll';
import { createValidation } from '../shared/middlaware/cities/Create';
import { getByIdValidation } from '../shared/middlaware/cities/GetById';

const router = Router();

router.get(
    '/',
    getAllValidation,
    citiesController.getAll);

router.get(
    '/:id',
    getByIdValidation,
    citiesController.getById);

router.post(
    '/',
    createValidation,
    citiesController.create);

export { router };
import { Router } from 'express';

import { citiesController } from './../controllers';
import { getAllValidation } from '../shared/middlaware/cities/GetAll';
import { createValidation } from '../shared/middlaware/cities/Create';
import { getByIdValidation } from '../shared/middlaware/cities/GetById';
import { updateValidation } from '../shared/middlaware/cities/UpdateById';
import { deleteValidation } from '../shared/middlaware/cities/Delete';

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

router.put(
    '/:id',
    updateValidation,
    citiesController.updateById);

router.delete(
    '/:id',
    deleteValidation,
    citiesController.deleteById);

export { router };
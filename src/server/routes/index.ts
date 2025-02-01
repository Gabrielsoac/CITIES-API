import { Router } from 'express';

import { citiesController } from './../controllers';
import { getAllValidation } from '../shared/middlaware/cities/GetAll';
import { createValidation } from '../shared/middlaware/cities/Create';
import { getAll } from '../controllers/cities/GetAll';

const router = Router();

router.get(
    '/',
    getAllValidation,
    getAll);

router.post(
    '/cities',
    createValidation,
    citiesController.create);

export { router };
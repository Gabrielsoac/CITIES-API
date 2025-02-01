import { Router } from 'express';

import {citiesController} from './../controllers';
import { createValidation } from '../shared/middlaware/cities/Create';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá');
});

router.post(
    '/cities',
    createValidation,
    citiesController.create);

export { router };
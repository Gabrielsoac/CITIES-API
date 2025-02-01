import { Router } from 'express';
import { createBodyValidator } from '../shared/middlawares/cities/CreateMiddleware';

import {citiesController} from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá');
});

router.post(
    '/cities',
    createBodyValidator,
    citiesController.create);

export { router };
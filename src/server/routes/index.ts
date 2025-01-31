import { Router } from 'express';

import {citiesController} from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá');
});

router.post('/cities', citiesController.create);

export { router };
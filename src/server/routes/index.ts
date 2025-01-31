import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá');
});

router.post('/', (req, res) => {
    res.status(StatusCodes.CREATED).json(req.body);
})

export { router };
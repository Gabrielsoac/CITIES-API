import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './Update';

export const citiesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById
}
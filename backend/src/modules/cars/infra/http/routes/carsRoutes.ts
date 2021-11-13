import { Router } from 'express';

import {
  CreateCarController,
  DeleteCarController,
  FindCarController,
  ListAllCarsController,
  UpdateCarController,
} from '@modules/cars/useCases';

const listAllCarsController = new ListAllCarsController();
const findCarController = new FindCarController();
const createCarController = new CreateCarController();
const deleteCarController = new DeleteCarController();
const updateCarController = new UpdateCarController();

export const carRoutes = Router();

carRoutes.get('/list', listAllCarsController.handle);
carRoutes.get('/find/', findCarController.handle);
carRoutes.post('/', createCarController.handle);
carRoutes.put('/:id', updateCarController.handle);
carRoutes.delete('/:id', deleteCarController.handle);

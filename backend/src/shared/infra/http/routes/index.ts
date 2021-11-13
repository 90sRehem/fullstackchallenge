import { Router } from 'express';
import { carRoutes } from '@modules/cars/infra/http/routes';

export const router = Router();

router.use('/cars', carRoutes);

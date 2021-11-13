import { CAR_REPOSITORY } from '@config/contants';
import { CarRepository } from '@modules/cars/infra/typeorm/repositories/CarRepository';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICarRepository>(CAR_REPOSITORY, CarRepository);

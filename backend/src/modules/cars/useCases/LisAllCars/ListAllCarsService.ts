import { inject, injectable } from 'tsyringe';
import { CAR_REPOSITORY } from '@config/contants';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@utils/AppError';

@injectable()
export class ListAllCarsService {
  constructor(
    @inject(CAR_REPOSITORY)
    private carRepository: ICarRepository,
  ) { }
  async execute() {
    const allCars = await this.carRepository.lisAll();

    if (!allCars.length) {
      throw new AppError('Nenhum carro foi encontrado.', 404);
    }
    return allCars;
  }
}

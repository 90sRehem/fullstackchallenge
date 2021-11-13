import { CAR_REPOSITORY } from '@config/contants';
import { IFindCarDTO } from '@modules/cars/dtos';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@utils/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindCarService {
  constructor(
    @inject(CAR_REPOSITORY)
    private carRepository: ICarRepository,
  ) { }
  async execute(data: IFindCarDTO) {
    const carExists = await this.carRepository.findBy(data);

    if (!carExists) {
      throw new AppError('Esse carro não existe.', 404);
    }

    return carExists;
  }
}

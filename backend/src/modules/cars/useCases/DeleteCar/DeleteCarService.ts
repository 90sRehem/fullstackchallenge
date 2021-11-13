import { CAR_REPOSITORY } from '@config/contants';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@utils/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteCarService {
  constructor(
    @inject(CAR_REPOSITORY)
    private carRepository: ICarRepository,
  ) { }
  async execute(id: string) {
    const carExists = await this.carRepository.findBy({ id });

    if (!carExists) {
      throw new AppError('Esse carro não existe.', 404);
    }

    await this.carRepository.delete(id);
  }
}

import { CAR_REPOSITORY } from '@config/contants';
import { IUpdateCarDTO } from '@modules/cars/dtos';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@utils/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateCarService {
  constructor(
    @inject(CAR_REPOSITORY)
    private carRepository: ICarRepository,
  ) { }
  async execute(data: IUpdateCarDTO) {
    const carExists = await this.carRepository.findBy({
      id: data.id,
    });

    if (!carExists) {
      throw new AppError('Esse carro não existe.', 404);
    }

    if (data.licensePlate && data.licensePlate !== carExists.licensePlate) {
      const licensePlateExists = await this.carRepository.findBy({
        licensePlate: data.licensePlate,
      });
      if (licensePlateExists) {
        throw new AppError(
          `A placa ${data.licensePlate} pertencec a outro veículo.`,
          400,
        );
      }
    }
    const updatedCar = await this.carRepository.update(data.id, {
      ...carExists,
      ...data,
    });

    return updatedCar;
  }
}

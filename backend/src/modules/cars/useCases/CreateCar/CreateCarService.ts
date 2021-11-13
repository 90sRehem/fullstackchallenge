import { inject, injectable } from 'tsyringe';
import { CAR_REPOSITORY } from '@config/contants';
import { ICreateCarDTO } from '@modules/cars/dtos';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@utils/AppError';

@injectable()
export class CreateCarService {
  constructor(
    @inject(CAR_REPOSITORY)
    private carRepository: ICarRepository,
  ) { }
  async execute({
    brand,
    licensePlate,
    manufacturedYear,
    model,
    version,
  }: ICreateCarDTO): Promise<Car> {
    const carExists = await this.carRepository.findBy({ licensePlate });

    if (carExists) {
      throw new AppError('Essa placa já foi cadastrada no sistema.', 400);
    }

    return this.carRepository.create({
      brand,
      licensePlate,
      manufacturedYear,
      model,
      version,
    });
  }
}

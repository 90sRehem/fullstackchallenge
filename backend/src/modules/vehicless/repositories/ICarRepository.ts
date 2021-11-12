import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  lisAll(): Promise<Car[]>;
  findBy(
    data: Pick<
      Car,
      'licensePlate' | 'brand' | 'model' | 'manufacturedYear' | 'version'
    >,
  ): Promise<Car>;
  update(
    data: Pick<
      Car,
      'licensePlate' | 'brand' | 'model' | 'manufacturedYear' | 'version'
    >,
  ): Promise<Car>;
  delete(id: Pick<Car, 'id'>): Promise<void>;
}

import { ICreateCarDTO } from '@modules/vehicless/dtos/ICreateCarDTO';
import { ICarRepository } from '@modules/vehicless/repositories/ICarRepository';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';

export class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  create(data: ICreateCarDTO): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  lisAll(): Promise<Car[]> {
    return this.repository.find();
  }
  findBy(
    data: Pick<
      Car,
      'licensePlate' | 'brand' | 'model' | 'manufacturedYear' | 'version'
    >,
  ): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  update(
    data: Pick<
      Car,
      'licensePlate' | 'brand' | 'model' | 'manufacturedYear' | 'version'
    >,
  ): Promise<Car> {
    throw new Error('Method not implemented.');
  }
  delete(id: Pick<Car, 'id'>): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

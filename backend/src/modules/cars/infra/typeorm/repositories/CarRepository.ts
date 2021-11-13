import { IUpdateCarDTO } from '@modules/cars/dtos';
import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { DeleteResult, getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';

export class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(data);

    return this.repository.save(car);
  }
  lisAll(): Promise<Car[]> {
    return this.repository.find();
  }
  findBy(
    data: Pick<
      Car,
      'licensePlate' | 'brand' | 'model' | 'manufacturedYear' | 'version'
    >,
  ): Promise<Car | undefined> {
    return this.repository.findOne({ where: data });
  }
  update(id: string, data: IUpdateCarDTO): Promise<Car> {
    const updatedVehicle = this.repository.create({ ...data, id });
    return this.repository.save(updatedVehicle);
  }
  delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}

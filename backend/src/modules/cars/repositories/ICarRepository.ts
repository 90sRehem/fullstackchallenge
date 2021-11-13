import { DeleteResult } from 'typeorm';
import { ICreateCarDTO, IFindCarDTO, IUpdateCarDTO } from '../dtos';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  lisAll(): Promise<Car[]>;
  findBy(data: IFindCarDTO): Promise<Car | undefined>;
  update(id: string, data: IUpdateCarDTO): Promise<Car>;
  delete(id: string): Promise<DeleteResult>;
}

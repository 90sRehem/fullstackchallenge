import { ICreateCarDTO } from '@modules/cars/dtos';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarService } from './CreateCarService';

export class CreateCarController {
  async handle(
    request: Request<unknown, unknown, ICreateCarDTO>,
    response: Response,
  ): Promise<Response> {
    const { brand, version, model, manufacturedYear, licensePlate } =
      request.body;
    const createCarService = container.resolve(CreateCarService);

    const newCar = await createCarService.execute({
      brand,
      licensePlate,
      manufacturedYear,
      model,
      version,
    });

    return response.status(201).json({ status: 'success', payload: newCar });
  }
}

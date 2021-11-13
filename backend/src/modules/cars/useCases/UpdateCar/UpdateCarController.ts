import { IUpdateCarDTO } from '@modules/cars/dtos';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCarService } from './UpdateCarService';

export class UpdateCarController {
  async handle(
    request: Request<{ id: string }, unknown, IUpdateCarDTO>,
    response: Response,
  ): Promise<Response> {
    const updateCarService = container.resolve(UpdateCarService);
    const { id } = request.params;
    const data = request.body;
    await updateCarService.execute({ ...data, id });

    return response.status(201).send();
  }
}

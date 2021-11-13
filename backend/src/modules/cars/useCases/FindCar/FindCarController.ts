import { IFindCarDTO } from '@modules/cars/dtos';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindCarService } from './FindCarService';

export class FindCarController {
  async handle(
    request: Request<unknown, unknown, unknown, IFindCarDTO>,
    response: Response,
  ): Promise<Response> {
    const findCarService = container.resolve(FindCarService);

    const car = await findCarService.execute(request.query);

    return response.status(200).json({ status: 'success', payload: car });
  }
}

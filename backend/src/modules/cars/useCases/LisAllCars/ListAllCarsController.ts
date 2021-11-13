import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllCarsService } from './ListAllCarsService';

export class ListAllCarsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listAllCarsService = container.resolve(ListAllCarsService);
    const allCars = await listAllCarsService.execute();

    return response.status(200).json({ status: 'success', payload: allCars });
  }
}

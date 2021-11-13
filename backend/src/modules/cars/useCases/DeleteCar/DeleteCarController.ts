import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCarService } from './DeleteCarService';

export class DeleteCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteCarService = container.resolve(DeleteCarService);
    const { id } = request.params;

    await deleteCarService.execute(id);

    return response.status(204).send();
  }
}

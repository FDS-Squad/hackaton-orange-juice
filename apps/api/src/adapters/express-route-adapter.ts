import { Controller } from 'interfaces/controller';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    let request;
    if (req) {
      request = {
        ...(req.body || {}),
        ...(req.params || {}),
      };
    }
    const httpResponse = await controller.handle(request ?? null);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

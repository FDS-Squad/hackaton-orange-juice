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
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};

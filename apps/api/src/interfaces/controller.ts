import { Request } from 'express';
import { HttpResponse } from './http';

export interface Controller {
  handle: (request?: Request) => Promise<HttpResponse<unknown>>;
}

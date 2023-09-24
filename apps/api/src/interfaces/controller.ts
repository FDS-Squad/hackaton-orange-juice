import { HttpResponse } from './http';

export interface Controller<TypeReq, TypeBody> {
  handle: (request?: TypeReq) => Promise<HttpResponse<TypeBody>>;
}

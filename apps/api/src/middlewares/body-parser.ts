import { json, RequestHandler } from 'express';

export const bodyParser: RequestHandler = json();

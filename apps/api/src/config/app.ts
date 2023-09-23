import express, { Express } from 'express';
import setupMiddlewares from './config/middlewares';

const app: Express = express();
setupMiddlewares(app);
export default app;

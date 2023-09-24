import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeEventsListController } from '../factories/controllers/events-list-controller-factory';

export default (router: Router): void => {
  router.get('/events-list', adaptRoute(makeEventsListController()));
};

import { EventsListController } from '../../modules/events/EventsListController';
import { EventsRepository } from '../../modules/events/repository/EventsRepository';
import { EventsListService } from '../../modules/events/services';

export const makeEventsListController = (): EventsListController => {
  const eventsRepository = new EventsRepository();
  const eventsListService = new EventsListService(eventsRepository);
  return new EventsListController(eventsListService);
};

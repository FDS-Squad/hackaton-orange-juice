import { EventsListController } from '../../modules/events/events-list-controller';
import { EventsRepository } from '../../modules/events/repository/events-repository';
import { EventsListService } from '../../modules/events/services';

export const makeEventsListController = (): EventsListController => {
  const eventsRepository = new EventsRepository();
  const eventsListService = new EventsListService(eventsRepository);
  return new EventsListController(eventsListService);
};

import { EventsRepository } from '../../../src/modules/events/repository/events-repository';
import { EventsListService } from '../../../src/modules/events/services';
import { EventsListController } from '../../../src/modules/events/events-list-controller';

describe('EventsListController', () => {
  it('should list all events', async () => {
    const repository = new EventsRepository();
    const service = new EventsListService(repository);
    const sut = new EventsListController(service);

    const response = await sut.handle();
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });
});

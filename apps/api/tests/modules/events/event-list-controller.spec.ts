import { EventsRepository } from '../../../src/modules/events/repository/events-repository';
import { EventsListService } from '../../../src/modules/events/services';
import { EventsListController } from '../../../src/modules/events/events-list-controller';

describe('EventsListController', () => {
  const makeSut = (): EventsListController => {
    const repository = new EventsRepository();
    const service = new EventsListService(repository);
    return new EventsListController(service);
  };

  it('should list all events', async () => {
    const sut = makeSut();
    const response = await sut.handle();
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('body');
  });
});

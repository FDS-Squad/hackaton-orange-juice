import { EventsRepository } from '../../../../src/modules/events/repository/events-repository';
import { EventsListService } from '../../../../src/modules/events/services/events-list-service';

describe('EventsListService', () => {
  const makeSut = (): EventsListService => {
    const repository = new EventsRepository();
    return new EventsListService(repository);
  };

  it('should return a promise of type IEvent', async () => {
    const sut = makeSut();

    const response = await sut.execute();

    expect(Array.isArray(response)).toBe(true);
    response.forEach((event) => {
      expect(typeof event.id).toBe('string');
      expect(typeof event.title).toBe('string');
      expect(typeof event.description).toBe('string');
      expect(typeof event.eventLink).toBe('string');
      expect(typeof event.city).toBe('string');
      expect(typeof event.state).toBe('string');
      expect(typeof event.locationType).toBe('string');
      expect(typeof event.price).toBe('string');
      expect(typeof event.category).toBe('string');
      expect(typeof event.startDate).toBe('object');
      expect(typeof event.endDate).toBe('object');
      expect(typeof event.createdAt).toBe('object');
      expect(typeof event.updatedAt).toBe('object');
    });
  });
});

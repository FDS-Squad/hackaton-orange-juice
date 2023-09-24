import { EventsRepository } from '../../../../src/modules/events/repository/events-repository';

jest.mock('../../../../src/utils/prisma', () => ({
  events: {
    findMany: jest.fn().mockResolvedValue([
      {
        id: 'any_id',
        title: 'any_title',
        description: 'any_description',
        eventLink: 'any_link',
        imageUrl: 'any_url',
        city: 'any_city',
        state: 'any_state',
        locationType: 'any_location',
        category: 'any_category',
        startDate: new Date('2023-09-22'),
        endDate: new Date('2023-09-24'),
        createdAt: new Date('2023-09-22'),
        updatedAt: new Date('2023-09-24'),
      },
    ]),
  },
}));

describe('EventsRepository', () => {
  it('should return all events', async () => {
    const sut = new EventsRepository();
    const events = await sut.listEvents();
    expect(events).toEqual([
      {
        id: 'any_id',
        title: 'any_title',
        description: 'any_description',
        eventLink: 'any_link',
        imageUrl: 'any_url',
        city: 'any_city',
        state: 'any_state',
        locationType: 'any_location',
        category: 'any_category',
        startDate: new Date('2023-09-22'),
        endDate: new Date('2023-09-24'),
        createdAt: new Date('2023-09-22'),
        updatedAt: new Date('2023-09-24'),
      },
    ]);
  });
});

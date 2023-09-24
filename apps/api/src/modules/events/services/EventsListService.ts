import { IEvents } from 'interfaces';
import { EventsRepository } from '../repository/EventsRepository';

export class EventsListService {
  private repository;

  constructor(repository: EventsRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<IEvents> {
    return await this.repository.listEvents();
  }
}

import { EventsRepository } from '../repository/EventsRepository';

export class EventsListService {
  private repository;

  constructor(repository: EventsRepository) {
    this.repository = repository;
  }

  public async execute() {
    return await this.repository.listEvents();
  }
}

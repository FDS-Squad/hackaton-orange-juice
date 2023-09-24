import { EventsListService } from './services';
import { Controller, HttpResponse, IEvents } from 'interfaces';

export class EventsListController implements Controller {
  private readonly eventsListService: EventsListService;

  constructor(eventsListService: EventsListService) {
    this.eventsListService = eventsListService;
  }

  async handle(): Promise<HttpResponse<IEvents>> {
    const result: IEvents = await this.eventsListService.execute();
    return {
      statusCode: 200,
      body: result,
    };
  }
}

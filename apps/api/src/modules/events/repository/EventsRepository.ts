import { IEvents } from 'interfaces';
import db from '../../../utils/prisma';

export class EventsRepository {
  async listEvents(): Promise<IEvents> {
    return db.events.findMany();
  }
}

import db from '../../../utils/prisma';

export class EventsRepository {
  async listEvents() {
    return db.events.findMany();
  }
}

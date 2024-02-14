interface IEvent {
  id: string;
  title: string;
  description: string;
  eventLink: string;
  imageUrl: string;
  city?: string | null;
  state?: string | null;
  locationType: 'REMOTE' | 'IN_PERSON' | 'BOTH';
  price: 'FREE' | 'PAID' | 'BOTH';
  category:
    | 'BOOTCAMP'
    | 'COMMUNITY'
    | 'CONFERENCE'
    | 'HACKATON'
    | 'LECTURE'
    | 'WORKSHOP';
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type IEvents = Array<IEvent>;

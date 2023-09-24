import { Category, LocationType, Price } from '@prisma/client';

interface IEvent {
  id: string;
  title: string;
  description: string;
  eventLink: string;
  imageUrl: string;
  city?: string | null;
  state?: string | null;
  locationType: LocationType;
  price: Price;
  category: Category;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type IEvents = Array<IEvent>;

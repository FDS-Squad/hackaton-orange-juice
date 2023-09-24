import { defineStore } from 'pinia';
import { useMainStore } from './mainStore';
import dayjs from 'dayjs';
import h$ from '@/utils/helpers';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import isBetween from 'dayjs/plugin/isBetween';

interface IEventStore {
  eventList: IEvent[];
  query: string;
}

export interface IEvent {
  id?: string;
  title: string;
  city: string;
  state: string;
  category: string;
  start_date: Date;
  end_date: Date;
  locationType: string;
  price: string;
  eventLink: string;
  imageUrl: string;
}

export const useEventStore = defineStore('event-store', {
  state: (): IEventStore => ({
    eventList: [] as IEvent[],
    query: '',
  }),

  actions: {
    async getAllEvents() {
      const { loadData } = useMainStore();

      loadData(['eventList']).then((resp) => {
        console.log(resp[0].data);
        // this.eventList = resp[0].data.eventList;
      });
    },
    async addNewEvent(event: IEvent) {
      const { postData } = useMainStore();

      postData(event).then(() => {
        console.log('enviou');
        this.getAllEvents();
      });
    },
    searchEvents(date: 'today' | 'tomorrow' | 'this-week' | 'this-month') {
      const today = dayjs();
      const tomorrow = dayjs().add(1, 'day');
      const nextWeek = dayjs().add(1, 'week');
      const nextMonth = dayjs().add(1, 'month');

      switch (date) {
        case 'today':
          // this.eventList = this.eventList.filter((event) => {
          //   const eventDate = dayjs(event.start_date);
          //   return eventDate.isSame(today, 'day');
          // });
          console.log('today: ', today);
          break;
        case 'tomorrow':
          // this.eventList = this.eventList.filter((event) => {
          //   const eventDate = dayjs(event.start_date);
          //   return eventDate.isSame(tomorrow, 'day');
          // });
          console.log('tomorrow: ', tomorrow);
          break;
        case 'this-week':
          // this.eventList = this.eventList.filter((event) => {
          //   const eventDate = dayjs(event.start_date);
          //   return eventDate.isBetween(today, nextWeek, null, '[]');
          // });
          console.log('this week: ', nextWeek);
          break;
        case 'this-month':
          // this.eventList = this.eventList.filter((event) => {
          //   const eventDate = dayjs(event.start_date);
          //   return eventDate.isBetween(today, nextMonth, null, '[]');
          // });
          console.log('this month: ', nextMonth);
          break;
        default:
          return;
      }
    },
  },
  getters: {
    filteredEvents: (state) => {
      const { eventList, query } = state;

      if (eventList) {
        if (query) {
          const filteredEvents = eventList.filter((event: IEvent) => {
            return (
              event.category.includes(query.toLowerCase()) ||
              event.title.toLowerCase().includes(query.toLowerCase()) ||
              event.city.toLowerCase().includes(query.toLowerCase())
            );
          });
          return filteredEvents.sort(h$.sortByDate);
        }

        return eventList.sort(h$.sortByDate);
      }
    },
  },
});

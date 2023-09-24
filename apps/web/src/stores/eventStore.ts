import { defineStore } from 'pinia';
import { useMainStore } from './mainStore';

interface IEventStore {
  eventList: IEvent[];
  query: string;
}

interface IEvent {
  id: 'string';
  title: string;
  city: string;
  state: string;
  category: string;
  start_date: Date;
  end_date: Date;
}

export const useEventStore = defineStore('event-store', {
  state: (): IEventStore => ({
    eventList: [] as IEvent[],
    query: '',
  }),

  actions: {
    async getAllAccounts() {
      const { loadData } = useMainStore();

      loadData(['eventList']).then((resp) => {
        console.log(resp[0].data);
        // this.eventList = resp[0].data.eventList;
      });
    },
  },
});

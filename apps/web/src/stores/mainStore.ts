/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import type { IEvent } from './eventStore';
import HTTP from '@/utils/http';
import h$ from '@/utils/helpers';

interface ImainState {
  error: string;
  isLoading: boolean;
}

export const useMainStore = defineStore('main-store', {
  state: (): ImainState => ({
    error: '',
    isLoading: false,
  }),

  actions: {
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    },
    async loadData(endpoints: string[]) {
      const api = new HTTP();
      this.error = '';

      try {
        const responses = await Promise.all(
          endpoints.map((endpoint) => api.get(endpoint)),
        );
        return responses;
      } catch (error: any) {
        if (error.response && error.response.status) {
          this.error = h$.statusCodeMessage(error.response.status);
        }
        return Promise.reject(error);
      }
    },
    async postData(event: IEvent) {
      const api = new HTTP();
      this.error = '';

      try {
        await api.post('add-event', event);
      } catch (error: any) {
        if (error.response && error.response.status) {
          this.error = h$.statusCodeMessage(error.response.status);
        }
      }
    },
  },
});

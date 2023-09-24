import { defineStore } from 'pinia';
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response && error.response.status) {
          this.error = h$.statusCodeMessage(error.response.status);
        }
        return Promise.reject(error);
      }
    },
  },
});

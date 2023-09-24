/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMainStore } from '@/stores/mainStore';
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';

class HTTP {
  private instance: AxiosInstance;

  constructor() {
    const mainStore = useMainStore();

    const startUrl = import.meta.env.VITE_APP_BASE_URL;
    this.instance = axios.create({ baseURL: startUrl });

    this.instance.interceptors.request.use(
      function (config) {
        mainStore.showLoading();

        // if (account.isAuthenticated)
        //   config.headers.Authorization = `Bearer ${account.current.token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      function (response) {
        mainStore.hideLoading();

        return response;
      },
      function (error) {
        mainStore.hideLoading();
        return Promise.reject(error);
      },
    );
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}

export default HTTP;

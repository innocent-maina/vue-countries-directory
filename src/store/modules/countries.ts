import { ActionContext } from 'vuex';

import { AxiosError } from 'axios';

import $http from '@/plugins/axios';

import { IRootState } from '@/interfaces/Root';

import {
  ICountryResponse,
  ICountriesState,
} from '@/interfaces/Countries';

export default {
  namespaced: true,

  state: {
    countries: [],

    Country: {},
  },

  getters: {
    getCountries: (state: ICountriesState): ICountryResponse[] => state.countries,

    getCountry: (state: ICountriesState): ICountryResponse => state.country,
  },

  mutations: {
    SET_COUNTRIES(state: ICountriesState, payload: ICountryResponse[]): void {
      state.countries = payload;
    },

    SET_COUNTRY(state: ICountriesState, payload: ICountryResponse): void {
      state.country = payload;
    },
  },

  actions: {
    async fetchCountries(
      { commit }: ActionContext<ICountriesState, IRootState>,
      payload: Record<string, unknown>,
    ): Promise<void> {
      try {
        const query = payload || '/all';

        const response = await $http.Api({
          method: 'GET',
          url: `${query}`,
          data: payload,
        });

        commit('SET_COUNTRIES', response.data);
      } catch (error) {
        const err = error as AxiosError;
        throw err.response;
      }
    },

    async fetchCountry(
      { commit }: ActionContext<ICountriesState, IRootState>,
      payload: string,
    ): Promise<void> {
      try {
        const response = await $http.Api({
          method: 'GET',
          url: `/alpha/${payload}`,
        });

        commit('SET_COUNTRY', response.data[0]);
      } catch (error) {
        const err = error as AxiosError;
        throw err.response;
      }
    },
  },
};

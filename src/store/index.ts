import { createStore } from 'vuex';

import { IRootState } from '@/interfaces/Root';

import Countries from './modules/countries';

export default createStore<IRootState>({
  modules: {
    Countries,
  },

  strict: process.env.NODE_ENV !== 'production',
});

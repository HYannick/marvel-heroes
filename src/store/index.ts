import { createStore } from 'vuex';

export const store = createStore({
  state: {
    version: process.env.VUE_APP_STORE_VERSION,
  },
  modules: {},
  strict: process.env.NODE_ENV !== 'production',
});

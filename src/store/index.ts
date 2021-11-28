import { createStore } from 'vuex';
import { appModule } from '@/app/secondary/vuex';

export const store = createStore({
  state: {
    version: process.env.VUE_APP_STORE_VERSION,
  },
  modules: {
    app: appModule(),
  },
  strict: process.env.NODE_ENV !== 'production',
});

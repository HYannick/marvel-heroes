import Vuex, { createStore } from 'vuex';
import { appModule } from '@/app/secondary/vuex';

const generateStore = () =>
  createStore({
    modules: {
      app: appModule(),
    },
  });
export const StoreHelper = {
  generateStore,
};

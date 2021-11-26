import Vuex, { createStore, Store } from "vuex";
import { appModule } from "@/store/app";
import { createApp } from "vue";
import { Vue } from "vue-class-component";

const generateStore = () =>
  createStore({
    modules: {
      app: appModule(),
    },
  });

export class dumbComponent extends Vue {}

const generateStoreOutOfVueContext = () => {
  const localVue = createApp(dumbComponent);
  localVue.use(generateStore());
  return generateStore();
};

export const StoreHelper = {
  generateStore,
  generateStoreOutOfVueContext,
};

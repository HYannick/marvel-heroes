import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { HeroService } from "@/heroes/primary/HeroService";
import { HeroResource } from "@/heroes/secondary/resource/HeroResource";
import axios from "axios";
import qs from "qs";

export const paramsSerializer = (params: any) =>
  qs.stringify(params, { arrayFormat: "repeat" });

const backendAxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
  paramsSerializer,
});

const heroResource = new HeroResource(backendAxiosInstance);
const heroService = new HeroService(heroResource);

createApp(App)
  .use(store)
  .use(router)
  .provide("heroService", heroService)
  .mount("#app");

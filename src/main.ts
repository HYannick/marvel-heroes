import { createApp } from 'vue';
import App from './app/primary/ui/App.vue';
import router from './router';
import { store } from './store';
import { HeroService } from '@/heroes/primary/HeroService';
import { HeroResource } from '@/heroes/secondary/resource/HeroResource';
import axios from 'axios';
import qs from 'qs';
import AppStore from '@/app/secondary/vuex/AppStore';

export const paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'repeat' });

const backendAxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
  paramsSerializer,
});

const appStore = new AppStore(store);
const heroResource = new HeroResource(backendAxiosInstance, appStore);
const heroService = new HeroService(heroResource, appStore);

createApp(App).use(store).use(router).provide('heroService', heroService).mount('#app');

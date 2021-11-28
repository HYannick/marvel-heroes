import { Module } from 'vuex';
import appVuexState, { AppVuexState } from '@/app/secondary/vuex/AppVuexState';
import AppVuexGetters from '@/app/secondary/vuex/AppVuexGetters';
import AppVuexActions from '@/app/secondary/vuex/AppVuexActions';
import AppVuexMutations from '@/app/secondary/vuex/AppVuexMutations';

export const appModule: () => Module<AppVuexState, any> = () => ({
  state: appVuexState,
  mutations: AppVuexMutations,
  actions: AppVuexActions,
  getters: AppVuexGetters,
});

import { AppVuexState } from '@/app/secondary/vuex/AppVuexState';

export enum AppVuexGetters {
  GET_HERO_DETAILS = 'GET_HERO_DETAILS',
}

const getHeroDetails = (state: AppVuexState) => state.currentHeroDetails;

export default {
  [AppVuexGetters.GET_HERO_DETAILS]: getHeroDetails,
};

import { AppVuexState } from '@/app/secondary/vuex/AppVuexState';
import { HeroProperties } from '@/heroes/domain/Hero';

export enum AppVuexMutations {
  SET_HERO_DETAILS = 'SET_HERO_DETAILS',
  RESET_HERO_DETAILS = 'RESET_HERO_DETAILS',
}

const setHeroDetails = (state: AppVuexState, heroDetails: HeroProperties) => {
  state.currentHeroDetails = heroDetails;
};

const resetHeroDetails = (state: AppVuexState) => {
  state.currentHeroDetails = null;
};

export default {
  [AppVuexMutations.SET_HERO_DETAILS]: setHeroDetails,
  [AppVuexMutations.RESET_HERO_DETAILS]: resetHeroDetails,
};

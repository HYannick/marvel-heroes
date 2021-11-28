import { ActionContext } from 'vuex';
import { AppVuexState } from '@/app/secondary/vuex/AppVuexState';
import { HeroProperties } from '@/heroes/domain/Hero';
import { AppVuexMutations } from '@/app/secondary/vuex/AppVuexMutations';

export enum AppVuexActions {
  SET_HERO_DETAILS = 'SET_HERO_DETAILS',
  RESET_HERO_DETAILS = 'RESET_HERO_DETAILS',
}

const setHeroDetails = ({ commit }: ActionContext<AppVuexState, any>, heroDetails: HeroProperties) => {
  commit(AppVuexMutations.SET_HERO_DETAILS, heroDetails);
};

const resetHeroDetails = ({ commit }: ActionContext<AppVuexState, any>) => {
  commit(AppVuexMutations.RESET_HERO_DETAILS);
};

export default {
  [AppVuexActions.SET_HERO_DETAILS]: setHeroDetails,
  [AppVuexActions.RESET_HERO_DETAILS]: resetHeroDetails,
};

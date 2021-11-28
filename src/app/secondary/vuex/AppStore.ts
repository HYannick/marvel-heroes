import { Store } from 'vuex';
import { AppVuexGetters } from '@/app/secondary/vuex/AppVuexGetters';
import { AppVuexActions } from '@/app/secondary/vuex/AppVuexActions';
import { HeroProperties } from '@/heroes/domain/Hero';

export default class AppStore {
  constructor(private store: Store<any>) {}

  get currentHeroDetails(): HeroProperties {
    return this.store.getters[AppVuexGetters.GET_HERO_DETAILS];
  }

  async setCurrentHeroDetails(heroDetails: HeroProperties): Promise<void> {
    await this.store.dispatch(AppVuexActions.SET_HERO_DETAILS, heroDetails);
  }

  async resetCurrentHeroDetails(): Promise<void> {
    await this.store.dispatch(AppVuexActions.RESET_HERO_DETAILS);
  }
}

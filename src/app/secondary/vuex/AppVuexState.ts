import { HeroProperties } from '@/heroes/domain/Hero';

export interface AppVuexState {
  currentHeroDetails: HeroProperties | null;
}

export default {
  currentHeroDetails: null,
} as AppVuexState;

import { Store } from "vuex";
import { HeroView } from "@/heroes/primary/view/HeroView";

export default class AppStore {
  constructor(private store: Store<any>) {}

  get currentHeroDetails(): HeroView | null {
    return null;
  }
}

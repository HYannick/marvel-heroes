import { Options, Vue } from 'vue-class-component';
import { HeroListVue } from '@/heroes/primary/ui/hero-list';
import { HeroDetailsVue } from '@/heroes/primary/ui/hero-details';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { Inject } from 'vue-property-decorator';
import { HeroService } from '@/heroes/primary/HeroService';

@Options({
  name: 'Home',
  components: {
    HeroListVue,
    HeroDetailsVue,
  },
})
export default class Home extends Vue {
  @Inject()
  heroService!: HeroService;

  get currentDetails() {
    return this.heroService.heroDetails;
  }

  async setCurrentDetails(heroDetails: HeroView) {
    await this.heroService.getHeroDetails(heroDetails.id);
  }

  async resetDetails() {
    await this.heroService.resetHeroDetails();
  }
}

// @Options({
//   name: 'Home',
//   components: {
//     HeroListVue,
//     HeroDetailsVue,
//   },
// })
// export default class Home extends Vue {
//   currentDetails: HeroView | null = null;
//
//   setCurrentDetails(heroDetails: HeroView) {
//     this.currentDetails = heroDetails;
//   }
//
//   resetDetails() {
//     this.currentDetails = null;
//   }
// }

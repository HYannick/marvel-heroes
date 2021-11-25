import { Options, Vue } from "vue-class-component";
import { HeroListVue } from "@/heroes/primary/ui/hero-list";
import { HeroDetailsVue } from "@/heroes/primary/ui/hero-details";
import { HeroView } from "@/heroes/primary/view/HeroView";

@Options({
  name: "Home",
  components: {
    HeroListVue,
    HeroDetailsVue,
  },
})
export default class Home extends Vue {
  currentDetails: HeroView | null = null;

  setCurrentDetails(heroDetails: HeroView) {
    this.currentDetails = heroDetails;
  }

  resetDetails() {
    this.currentDetails = null;
  }
}
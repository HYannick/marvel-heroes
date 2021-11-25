import { Options, Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import { HeroService } from "@/heroes/primary/HeroService";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { Page } from "@/common/domain/Page";
import { PaginationVue } from "@/common/primary/ui/pagination";
import { ListSkeletonVue } from "@/heroes/primary/ui/hero-list/list-sketelon";

@Options({
  components: {
    PaginationVue,
    ListSkeletonVue,
  },
})
export default class HeroListComponent extends Vue {
  @Inject()
  heroService!: HeroService;

  heroes: Page<HeroView> | null = null;

  pending = true;
  limit = 20;

  async created() {
    await this.updateHeroesList();
  }

  async updateHeroesList(page = 1) {
    this.pending = true;
    this.heroes = await this.heroService.getHeroes({
      limit: this.limit,
      offset: this.setPageOffset(page),
    });
    this.pending = false;
  }

  private setPageOffset(page: number) {
    return page != 1 ? this.limit * page - this.limit : 0;
  }

  showDetails(hero: HeroView) {
    this.$emit("heroSelected", hero);
  }
}

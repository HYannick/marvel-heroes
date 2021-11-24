import { Options, Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import { HeroService } from "@/heroes/primary/HeroService";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { Page } from "@/common/domain/Page";
import { PaginationVue } from "@/common/primary/ui/pagination";

@Options({
  components: {
    PaginationVue,
  },
})
export default class HeroListComponent extends Vue {
  @Inject()
  heroService!: HeroService;

  heroes: Page<HeroView> | null = null;

  async created() {
    await this.updateHeroesList();
  }

  async updateHeroesList(page = 1) {
    this.heroes = await this.heroService.getHeroes({
      limit: 20,
      offset: this.setPageOffset(page),
    });
  }

  private setPageOffset(page: number) {
    return page != 1 ? 20 * page - 20 : 0;
  }
}

import { HeroService } from '@/heroes/primary/HeroService';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { Page } from '@/common/domain/Page';
import { PaginationVue } from '@/common/primary/ui/pagination';
import { ListSkeletonVue } from '@/heroes/primary/ui/hero-list/list-sketelon';
import { defineComponent, inject, reactive, toRefs } from 'vue';
import { useUpdateHeroesList } from '@/heroes/primary/ui/hero-list/HeroMethods';

// ---- To be uncommented for Vue 3 Class Component version
// import { Options, Vue } from "vue-class-component";
// import { Inject } from "vue-property-decorator";

export interface HeroesComponentState {
  heroes: Page<HeroView> | null;
  pending: boolean;
  limit: number;
}

// VUE 3 Composition API version
export default defineComponent({
  name: 'HeroListComponent',
  components: {
    PaginationVue,
    ListSkeletonVue,
  },
  setup(_, context) {
    const state = reactive({
      heroes: null as Page<HeroView> | null,
      pending: true,
      limit: 20,
    }) as HeroesComponentState;

    const heroService = inject('heroService') as HeroService;
    const { getHeroes, showDetails } = useUpdateHeroesList(state, context, heroService);

    return {
      ...toRefs(state),
      heroService,
      getHeroes,
      showDetails,
    };
  },

  created() {
    this.getHeroes();
  },
});

//Vue 3 Class Component version

// @Options({
//   components: {
//     PaginationVue,
//     ListSkeletonVue,
//   },
// })
// export default class HeroListComponent extends Vue {
//   @Inject()
//   heroService!: HeroService;
//
//   heroes: Page<HeroView> | null = null;
//
//   pending = true;
//   limit = 20;
//
//   async created() {
//     await this.updateHeroesList();
//   }
//
//   async updateHeroesList(page = 1) {
//     this.pending = true;
//     this.heroes = await this.heroService.getHeroes({
//       limit: this.limit,
//       offset: this.setPageOffset(page),
//     });
//     this.pending = false;
//   }
//
//   private setPageOffset(page: number) {
//     return page != 1 ? this.limit * page - this.limit : 0;
//   }
//
//   showDetails(hero: HeroView) {
//     this.$emit("heroSelected", hero);
//   }
// }

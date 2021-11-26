import { HeroView } from '@/heroes/primary/view/HeroView';
import { HeroService } from '@/heroes/primary/HeroService';
import { HeroesComponentState } from '@/heroes/primary/ui/hero-list/HeroList.component';
import { SetupContext } from 'vue';

export const useUpdateHeroesList = (state: HeroesComponentState, context: SetupContext, heroService: HeroService) => {
  const getHeroes = async (page = 1) => {
    state.pending = true;
    state.heroes = await heroService.getHeroes({
      limit: state.limit,
      offset: setPageOffset(page),
    });
    state.pending = false;
  };

  const setPageOffset = (page: number) => (page != 1 ? state.limit * page - state.limit : 0);

  const showDetails = (hero: HeroView) => {
    context.emit('heroSelected', hero);
  };

  return {
    getHeroes,
    showDetails,
  };
};

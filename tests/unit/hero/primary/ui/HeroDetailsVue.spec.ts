import { VueWrapper, shallowMount } from '@vue/test-utils';
import { createHeroView } from '@unit/hero/fixtures/hero.fixtures';
import { HeroDetailsComponent, HeroDetailsVue } from '@/heroes/primary/ui/hero-details';
import { HeroService } from '@/heroes/primary/HeroService';
import { createComicView, createComicViewPage } from '@unit/comics/domain/fixtures/comic.fixtures';

let wrapper: VueWrapper<HeroDetailsComponent>;
let heroListComponent: HeroDetailsComponent;
let heroService: any;
const heroView = createHeroView();

const createWrapper = (heroService: HeroService) => {
  wrapper = shallowMount(HeroDetailsVue, {
    props: {
      details: heroView,
    },
    global: {
      provide: {
        heroService,
      },
    },
  });
  heroListComponent = wrapper.vm;
  return heroListComponent;
};

describe('HeroDetailsVue', () => {
  beforeEach(() => {
    heroService = {
      getHeroComics: jest.fn().mockResolvedValue(createComicViewPage()),
    };
    createWrapper(heroService);
  });

  it('should be a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should get hero details from props', () => {
    expect(heroListComponent.details).toEqual(heroView);
  });

  it('should emit event while going back', () => {
    heroListComponent.goBack();
    expect(wrapper.emitted().closeDetails).toBeTruthy();
  });

  it('should get comics related to hero', async () => {
    await heroListComponent.getComics();
    expect(heroService.getHeroComics).toHaveBeenCalledWith(1234);
    expect(heroListComponent.relatedComics).toEqual([createComicView(), createComicView()]);
  });
});

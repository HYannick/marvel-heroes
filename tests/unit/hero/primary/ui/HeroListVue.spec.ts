import { VueWrapper, shallowMount } from "@vue/test-utils";
import { HeroListComponent, HeroListVue } from "@/heroes/primary/ui/hero-list";
import { HeroService } from "@/heroes/primary/HeroService";
import {
  createHeroView,
  createHeroViewPage,
} from "@unit/hero/fixtures/hero.fixtures";

let wrapper: VueWrapper<HeroListComponent>;
let heroListComponent: HeroListComponent;
let heroService: any;

const createWrapper = (heroService: HeroService) => {
  wrapper = shallowMount<HeroListComponent>(HeroListVue, {
    global: {
      provide: {
        heroService,
      },
    },
  });
  heroListComponent = wrapper.vm;
  return heroListComponent;
};

describe("HeroListVue", () => {
  beforeEach(() => {
    heroService = {
      getHeroes: jest.fn().mockResolvedValue(createHeroViewPage()),
    } as any;
    createWrapper(heroService);
  });

  it("should be a vue instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should get heroes", () => {
    expect(heroListComponent.heroes).toEqual({
      content: [createHeroView(), createHeroView()],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });

  it("should update pagination", () => {
    heroListComponent.updateHeroesList(1);
    expect(heroService.getHeroes).toHaveBeenCalledWith({
      limit: 20,
      offset: 0,
    });
    heroListComponent.updateHeroesList(2);
    expect(heroService.getHeroes).toHaveBeenCalledWith({
      limit: 20,
      offset: 20,
    });
    heroListComponent.updateHeroesList(5);
    expect(heroService.getHeroes).toHaveBeenCalledWith({
      limit: 20,
      offset: 80,
    });
  });
});

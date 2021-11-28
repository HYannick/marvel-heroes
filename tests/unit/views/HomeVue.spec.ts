import { VueWrapper, shallowMount } from '@vue/test-utils';
import { HomeVue, HomeComponent } from '@/views/home';
import { createHeroView } from '@unit/hero/fixtures/hero.fixtures';

let wrapper: VueWrapper<HomeComponent>;
let homeComponent: HomeComponent;
let heroService: any;

const heroView = createHeroView();

const createWrapper = (heroService: any) => {
  wrapper = shallowMount(HomeVue, {
    props: {
      details: heroView,
    },
    global: {
      provide: {
        heroService,
      },
    },
  });
  homeComponent = wrapper.vm;
  return homeComponent;
};

describe('HomeVue', () => {
  beforeEach(() => {
    heroService = {
      heroDetails: createHeroView(),
      getHeroDetails: jest.fn(),
      resetHeroDetails: jest.fn(),
    };
    createWrapper(heroService);
  });

  it('should be a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should not have currentDetails', () => {
    expect(homeComponent.currentDetails).toEqual(createHeroView());
  });

  it('should set current details', () => {
    homeComponent.setCurrentDetails(heroView);
    expect(heroService.getHeroDetails).toHaveBeenCalledWith(1234);
  });

  it('should reset current details', () => {
    homeComponent.resetDetails();
    expect(heroService.resetHeroDetails).toHaveBeenCalledTimes(1);
  });
});

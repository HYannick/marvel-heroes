import { VueWrapper, shallowMount } from '@vue/test-utils';
import { createHeroView } from '@unit/hero/fixtures/hero.fixtures';
import { HeroDetailsComponent, HeroDetailsVue } from '@/heroes/primary/ui/hero-details';

let wrapper: VueWrapper<HeroDetailsComponent>;
let heroListComponent: HeroDetailsComponent;

const heroView = createHeroView();

const createWrapper = () => {
  wrapper = shallowMount(HeroDetailsVue, {
    props: {
      details: heroView,
    },
  });
  heroListComponent = wrapper.vm;
  return heroListComponent;
};

describe('HeroDetailsVue', () => {
  beforeEach(() => {
    createWrapper();
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
});

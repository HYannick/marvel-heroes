import { VueWrapper, shallowMount } from "@vue/test-utils";
import { HomeVue, HomeComponent } from "@/views/home";
import { createHeroView } from "@unit/hero/fixtures/hero.fixtures";

let wrapper: VueWrapper<HomeComponent>;
let homeComponent: HomeComponent;

const heroView = createHeroView();

const createWrapper = () => {
  wrapper = shallowMount<HomeComponent>(HomeVue, {
    props: {
      details: heroView,
    }
  });
  homeComponent = wrapper.vm;
  return homeComponent;
};

describe("HomeVue", () => {
  beforeEach(() => {
    createWrapper();
  });

  it("should be a vue instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should not have currentDetails", () => {
    expect(homeComponent.currentDetails).toBeNull();
  });

  it("should set current details", () => {
    homeComponent.setCurrentDetails(heroView);
    expect(homeComponent.currentDetails).toEqual(heroView);
  });

  it("should reset current details", () => {
    homeComponent.resetDetails();
    expect(homeComponent.currentDetails).toBeNull();
  });

});

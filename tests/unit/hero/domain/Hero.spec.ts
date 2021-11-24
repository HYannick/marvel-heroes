import { Hero, HeroProperties } from "@/heroes/domain/Hero";
import { mockHeroThumbnail } from "@unit/hero/fixtures/hero.fixtures";

const mockedHeroThumbnail = mockHeroThumbnail("ms-marvel", "jpg");
const heroProperties: HeroProperties = {
  id: 1234,
  name: "Ms Marvel",
  thumbnail: mockedHeroThumbnail,
  modified: new Date("10/12/1990"),
  description: "The true hero",
};

describe("Hero", () => {
  it("should instanciate a Hero from HeroProperties", () => {
    const hero = Hero.fromProperties(heroProperties);
    expect(hero).toBeInstanceOf(Hero);
    expect(hero.properties).toEqual({
      id: 1234,
      name: "Ms Marvel",
      thumbnail: {
        portrait: {
          small: "ms-marvel/portrait_small.jpg",
          medium: "ms-marvel/portrait_medium.jpg",
          xlarge: "ms-marvel/portrait_xlarge.jpg",
          fantastic: "ms-marvel/portrait_fantastic.jpg",
          uncanny: "ms-marvel/portrait_uncanny.jpg",
        },
        standard: {
          small: "ms-marvel/standard_small.jpg",
          medium: "ms-marvel/standard_medium.jpg",
          xlarge: "ms-marvel/standard_xlarge.jpg",
          fantastic: "ms-marvel/standard_fantastic.jpg",
          uncanny: "ms-marvel/standard_uncanny.jpg",
        },
        landscape: {
          small: "ms-marvel/landscape_small.jpg",
          medium: "ms-marvel/landscape_medium.jpg",
          xlarge: "ms-marvel/landscape_xlarge.jpg",
          fantastic: "ms-marvel/landscape_fantastic.jpg",
          uncanny: "ms-marvel/landscape_uncanny.jpg",
        },
        fullsize: "ms-marvel.jpg",
        detail: "ms-marvel/detail.jpg",
      },
      modified: new Date("10/12/1990"),
      description: "The true hero",
    });
  });
});

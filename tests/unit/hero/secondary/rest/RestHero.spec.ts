import { RestHero } from "@/heroes/secondary/rest/RestHero";
import { createRestHero, mockHeroThumbnail } from "../../fixtures/hero.fixtures";

describe("RestHero", () => {
  it("should instanciate a RestHero", () => {
    expect(
      new RestHero(1234, "Ms Marvel", "The true hero", "10/12/1990", {
        path: "ms-marvel",
        extension: "jpg",
      })
    ).toBeInstanceOf(RestHero);
  });

  it("should create a domain Hero from RestHero", () => {
    const hero = RestHero.toDomain(createRestHero());
    expect(hero.properties).toEqual({
      id: 1234,
      name: "Jessica Jones",
      description: "a drunk super girl",
      modified: new Date("10/12/1993"),
      thumbnail: mockHeroThumbnail(),
    });
  });
});

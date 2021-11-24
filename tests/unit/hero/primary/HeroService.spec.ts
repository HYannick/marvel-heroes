import { HeroService } from "@/heroes/primary/HeroService";

let getHeroesUseCase: any;
let getHeroDetailsUseCase: any;
const createHeroService = () => {
  const heroRepository: any = {};
  const heroService = new HeroService(heroRepository);
  getHeroesUseCase = { execute: jest.fn() };
  getHeroDetailsUseCase = { execute: jest.fn() };
  heroService["getHeroesUseCase"] = getHeroesUseCase;
  heroService["getHeroDetailsUseCase"] = getHeroDetailsUseCase;
  return heroService;
};
describe("HeroService", () => {
  it("should call getHeroes use case", async () => {
    const heroService = createHeroService();
    const pagination = { limit: 20 };
    await heroService.getHeroes(pagination);
    expect(getHeroesUseCase.execute).toHaveBeenCalledTimes(1);
    expect(getHeroesUseCase.execute).toHaveBeenCalledWith(pagination);
  });

  it("should getHeroDetails use case", async() => {
    const heroService = createHeroService();
    await heroService.getHeroDetails(12345);
    expect(getHeroDetailsUseCase.execute).toHaveBeenCalledTimes(1);
    expect(getHeroDetailsUseCase.execute).toHaveBeenCalledWith(12345);
  });
});

import { createHero } from "../../fixtures/hero.fixtures";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { GetHeroDetailsUseCase } from "@/heroes/primary/use-cases/GetHeroDetailsUseCase";

let heroRepository: any;
describe("GetHeroDetails use case", () => {
  beforeEach(() => {
    heroRepository = {
      getHeroDetails: jest.fn().mockResolvedValue(createHero()),
    };
  });
  it("should get hero details", async () => {
    const getHeroDetailsUseCase = new GetHeroDetailsUseCase(heroRepository);
    const heroDetails = await getHeroDetailsUseCase.execute(1234);
    expect(heroRepository.getHeroDetails).toHaveBeenCalledWith(1234);
    expect(heroDetails).toEqual( HeroView.fromDomain(createHero()));
  });
});

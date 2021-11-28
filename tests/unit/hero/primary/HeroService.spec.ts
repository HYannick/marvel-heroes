import { HeroService } from '@/heroes/primary/HeroService';
import { createHero, createHeroView } from '@unit/hero/fixtures/hero.fixtures';

let getHeroesUseCase: any;
let getHeroDetailsUseCase: any;
let getHeroComicsUseCase: any;
const appStore: any = {
  currentHeroDetails: createHero().properties,
  resetCurrentHeroDetails: jest.fn(),
};
const createHeroService = () => {
  const heroRepository: any = {};
  const heroService = new HeroService(heroRepository, appStore);
  getHeroesUseCase = { execute: jest.fn() };
  getHeroDetailsUseCase = { execute: jest.fn() };
  getHeroComicsUseCase = { execute: jest.fn() };
  heroService['getHeroesUseCase'] = getHeroesUseCase;
  heroService['getHeroDetailsUseCase'] = getHeroDetailsUseCase;
  heroService['getHeroComicsUseCase'] = getHeroComicsUseCase;
  return heroService;
};
describe('HeroService', () => {
  it('should call getHeroes use case', async () => {
    const heroService = createHeroService();
    const pagination = { limit: 20 };
    await heroService.getHeroes(pagination);
    expect(getHeroesUseCase.execute).toHaveBeenCalledTimes(1);
    expect(getHeroesUseCase.execute).toHaveBeenCalledWith(pagination);
  });

  it('should call getHeroDetails use case', async () => {
    const heroService = createHeroService();
    await heroService.getHeroDetails(12345);
    expect(getHeroDetailsUseCase.execute).toHaveBeenCalledTimes(1);
    expect(getHeroDetailsUseCase.execute).toHaveBeenCalledWith(12345);
  });

  it('should call getHeroComics use case', async () => {
    const heroService = createHeroService();
    await heroService.getHeroComics(12345);
    expect(getHeroComicsUseCase.execute).toHaveBeenCalledTimes(1);
    expect(getHeroComicsUseCase.execute).toHaveBeenCalledWith(12345);
  });

  it('should get hero details', () => {
    const heroService = createHeroService();
    expect(heroService.heroDetails).toEqual(createHeroView());
  });

  it('should reset hero details', async () => {
    const heroService = createHeroService();
    await heroService.resetHeroDetails();
    expect(appStore.resetCurrentHeroDetails).toHaveBeenCalledTimes(1);
  });
});

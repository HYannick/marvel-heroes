import { createHero } from '../../fixtures/hero.fixtures';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { GetHeroesUseCase } from '@/heroes/primary/use-cases/GetHeroesUseCase';

let heroRepository: any;
describe('GetHeroes use case', () => {
  beforeEach(() => {
    heroRepository = {
      getHeroes: jest.fn().mockResolvedValue({
        content: [createHero(), createHero({ id: 5678, name: 'Spiderman' })],
        itemsNumber: 20,
        itemsPerPage: 3,
        numberOfPages: 7,
      }),
    };
  });
  it('should get all heroes', async () => {
    const getHeroesUseCase = new GetHeroesUseCase(heroRepository);
    const heroes = await getHeroesUseCase.execute({ limit: 20 });
    expect(heroRepository.getHeroes).toHaveBeenCalledWith({ limit: 20 });
    expect(heroes).toEqual({
      content: [HeroView.fromDomain(createHero()), HeroView.fromDomain(createHero({ id: 5678, name: 'Spiderman' }))],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });
});

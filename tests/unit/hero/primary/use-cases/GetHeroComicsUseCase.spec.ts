import { GetHeroComicsUseCase } from '@/heroes/primary/use-cases/GetHeroComicsUseCase';
import { createComic } from '@unit/comics/domain/fixtures/comic.fixtures';
import { ComicView } from '@/comics/primary/view/ComicView';

let heroRepository: any;
describe('GetHeroComics use case', () => {
  beforeEach(() => {
    heroRepository = {
      getHeroComics: jest.fn().mockResolvedValue({
        content: [createComic(), createComic({ id: 5678, title: 'The Amazing Spiderman' })],
        itemsNumber: 20,
        itemsPerPage: 3,
        numberOfPages: 7,
      }),
    };
  });
  it('should get all heroes', async () => {
    const getHeroComicsUseCase = new GetHeroComicsUseCase(heroRepository);
    const heroes = await getHeroComicsUseCase.execute(1234);
    expect(heroRepository.getHeroComics).toHaveBeenCalledWith(1234);
    expect(heroes).toEqual({
      content: [ComicView.fromDomain(createComic()), ComicView.fromDomain(createComic({ id: 5678, title: 'The Amazing Spiderman' }))],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });
});

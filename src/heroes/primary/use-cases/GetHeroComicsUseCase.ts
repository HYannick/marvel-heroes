import { HeroRepository } from '@/heroes/domain/repository/HeroRepository';
import { Page } from '@/common/domain/Page';
import { ComicView } from '@/comics/primary/view/ComicView';
import { HeroId } from '@/heroes/domain/HeroId';

export class GetHeroComicsUseCase {
  constructor(private heroRepository: HeroRepository) {}

  async execute(heroId: HeroId): Promise<Page<ComicView>> {
    const page = await this.heroRepository.getHeroComics(heroId);

    return {
      ...page,
      content: page.content.map(comic => ComicView.fromDomain(comic)),
    };
  }
}

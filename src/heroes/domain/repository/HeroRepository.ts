import { Hero } from '@/heroes/domain/Hero';
import { Page } from '@/common/domain/Page';
import { RestPagination } from '@/common/secondary/rest/RestPagination';
import { HeroId } from '@/heroes/domain/HeroId';
import { Comic } from '@/comics/domain/Comic';

export interface HeroRepository {
  getHeroes(pagination: RestPagination): Promise<Page<Hero>>;
  getHeroDetails(heroId: HeroId): Promise<Hero | null>;
  getHeroComics(heroId: HeroId): Promise<Page<Comic>>;
}

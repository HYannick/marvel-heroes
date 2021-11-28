import { Hero, HeroUrlType } from '@/heroes/domain/Hero';
import { RestThumbnail } from '@/common/secondary/rest/RestThumbnail';
import { RestUrl } from '@/common/secondary/rest/RestUrl';

export class RestHero {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly modified: string,
    public readonly thumbnail: RestThumbnail,
    public readonly urls: RestUrl[]
  ) {}

  static toDomain(restHero: RestHero): Hero {
    return Hero.fromProperties({
      id: restHero.id,
      name: restHero.name,
      description: restHero.description,
      thumbnail: RestThumbnail.toDomain(restHero.thumbnail),
      modified: new Date(restHero.modified),
      urls: restHero.urls.map(url => ({
        type: url.type as HeroUrlType,
        url: url.url,
      })),
    });
  }
}

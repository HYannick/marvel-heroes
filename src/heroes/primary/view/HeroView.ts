import { Hero, HeroUrl } from '@/heroes/domain/Hero';
import { Thumbnail } from '@/common/domain/Thumbnail';

export class HeroView {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly modified: Date,
    public readonly thumbnail: Thumbnail,
    public readonly urls: HeroUrl[]
  ) {}

  static fromDomain(hero: Hero): HeroView {
    const { id, name, thumbnail, description, modified, urls } = hero.properties;
    return new HeroView(id, name, description, modified, thumbnail, urls);
  }
}

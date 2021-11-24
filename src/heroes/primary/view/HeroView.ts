import { Hero, HeroThumbnail } from "@/heroes/domain/Hero";

export class HeroView {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly modified: Date,
    public readonly thumbnail: HeroThumbnail
  ) {}

  static fromDomain(hero: Hero): HeroView {
    const { id, name, thumbnail, description, modified } = hero.properties;
    return new HeroView(id, name, description, modified, thumbnail);
  }
}

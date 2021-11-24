import { Hero } from "@/heroes/domain/Hero";

export type RestHeroThumbnail = { path: string; extension: string };
export class RestHero {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly modified: string,
    public readonly thumbnail: RestHeroThumbnail
  ) {}

  static toDomain(restHero: RestHero): Hero {
    const { path, extension } = restHero.thumbnail;
    return Hero.fromProperties({
      id: restHero.id,
      name: restHero.name,
      description: restHero.description,
      thumbnail: {
        portrait: {
          small: `${path}/portrait_small.${extension}`,
          medium: `${path}/portrait_medium.${extension}`,
          xlarge: `${path}/portrait_xlarge.${extension}`,
          fantastic: `${path}/portrait_fantastic.${extension}`,
          uncanny: `${path}/portrait_uncanny.${extension}`,
        },
        standard: {
          small: `${path}/standard_small.${extension}`,
          medium: `${path}/standard_medium.${extension}`,
          xlarge: `${path}/standard_xlarge.${extension}`,
          fantastic: `${path}/standard_fantastic.${extension}`,
          uncanny: `${path}/standard_uncanny.${extension}`,
        },
        landscape: {
          small: `${path}/landscape_small.${extension}`,
          medium: `${path}/landscape_medium.${extension}`,
          xlarge: `${path}/landscape_xlarge.${extension}`,
          fantastic: `${path}/landscape_fantastic.${extension}`,
          uncanny: `${path}/landscape_uncanny.${extension}`,
        },
        fullsize: `${path}.${extension}`,
        detail: `${path}/detail.${extension}`,
      },
      modified: new Date(restHero.modified),
    });
  }
}

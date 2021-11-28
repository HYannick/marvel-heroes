import { Thumbnail } from '@/common/domain/Thumbnail';

export interface HeroProperties {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  urls: HeroUrl[];
}

export enum HeroUrlType {
  DETAIL = 'detail',
  WIKI = 'wiki',
  COMIC_LIST = 'comiclink',
}

export interface HeroUrl {
  type: HeroUrlType;
  url: string;
}

export class Hero {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly description: string,
    private readonly modified: Date,
    private readonly thumbnail: Thumbnail,
    private readonly urls: HeroUrl[]
  ) {}

  static fromProperties(properties: HeroProperties): Hero {
    return new Hero(properties.id, properties.name, properties.description, properties.modified, properties.thumbnail, properties.urls);
  }

  get properties(): HeroProperties {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      modified: this.modified,
      thumbnail: this.thumbnail,
      urls: this.urls,
    };
  }
}

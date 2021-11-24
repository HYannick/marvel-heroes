export type HeroThumbnailSizes = {
  small: string;
  medium: string;
  xlarge: string;
  fantastic: string;
  uncanny: string;
};

export interface HeroThumbnail {
  portrait: HeroThumbnailSizes;
  standard: HeroThumbnailSizes;
  landscape: HeroThumbnailSizes;
  fullsize: string;
  detail: string;
}

export interface HeroProperties {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: HeroThumbnail;
}

export class Hero {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly description: string,
    private readonly modified: Date,
    private readonly thumbnail: HeroThumbnail
  ) {}

  static fromProperties(properties: HeroProperties): Hero {
    return new Hero(
      properties.id,
      properties.name,
      properties.description,
      properties.modified,
      properties.thumbnail
    );
  }

  get properties(): HeroProperties {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      modified: this.modified,
      thumbnail: this.thumbnail,
    };
  }
}

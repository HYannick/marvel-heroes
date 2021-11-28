import { Thumbnail } from '@/common/domain/Thumbnail';

export interface ComicProperties {
  id: number;
  title: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  url: string;
}

export class Comic {
  constructor(
    private readonly id: number,
    private readonly title: string,
    private readonly description: string,
    private readonly modified: Date,
    private readonly thumbnail: Thumbnail,
    private readonly url: string
  ) {}

  static fromProperties(properties: ComicProperties): Comic {
    return new Comic(properties.id, properties.title, properties.description, properties.modified, properties.thumbnail, properties.url);
  }

  get properties(): ComicProperties {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      modified: this.modified,
      thumbnail: this.thumbnail,
      url: this.url,
    };
  }
}

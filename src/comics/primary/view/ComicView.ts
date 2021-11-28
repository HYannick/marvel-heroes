import { Comic } from '@/comics/domain/Comic';
import { Thumbnail } from '@/common/domain/Thumbnail';

export class ComicView {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly modified: Date,
    public readonly thumbnail: Thumbnail,
    public readonly url: string
  ) {}

  static fromDomain(comic: Comic): ComicView {
    const { id, title, thumbnail, description, modified, url } = comic.properties;
    return new ComicView(id, title, description, modified, thumbnail, url);
  }
}

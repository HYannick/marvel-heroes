import { Comic } from '@/comics/domain/Comic';
import { ComicUrlType } from '@/comics/domain/Enums';
import { RestThumbnail } from '@/common/secondary/rest/RestThumbnail';
import { RestUrl } from '@/common/secondary/rest/RestUrl';

export class RestComic {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly modified: string,
    public readonly thumbnail: RestThumbnail,
    public readonly urls: RestUrl[]
  ) {}

  static toDomain(restComic: RestComic): Comic {
    const restComicUrl = restComic.urls.find(url => url.type === ComicUrlType.DETAIL);
    return Comic.fromProperties({
      id: restComic.id,
      title: restComic.title,
      description: restComic.description,
      thumbnail: RestThumbnail.toDomain(restComic.thumbnail),
      modified: new Date(restComic.modified),
      url: restComicUrl ? restComicUrl.url : '',
    });
  }
}

import { Comic } from '@/comics/domain/Comic';
import { ComicUrl } from '@/comics/domain/Enums';

export type RestThumbnail = { path: string; extension: string };

interface RestComicUrl {
  type: string;
  url: string;
}

export class RestComic {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly modified: string,
    public readonly thumbnail: RestThumbnail,
    public readonly urls: RestComicUrl[]
  ) {}

  static toDomain(restComic: RestComic): Comic {
    const { path, extension } = restComic.thumbnail;
    const restComicUrl = restComic.urls.find(url => url.type === ComicUrl.DETAIL);
    return Comic.fromProperties({
      id: restComic.id,
      title: restComic.title,
      description: restComic.description,
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
      modified: new Date(restComic.modified),
      url: restComicUrl ? restComicUrl.url : '',
    });
  }
}

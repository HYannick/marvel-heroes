import { RestComic } from '@/comics/secondary/rest/RestComic';
import { Comic, ComicProperties } from '@/comics/domain/Comic';
import { Page } from '@/common/domain/Page';
import { ComicView } from '@/comics/primary/view/ComicView';

export const mockComicThumbnail = (path = 'jessica', extension = 'jpg') => ({
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
});

export const createRestComic = (opts?: Partial<RestComic>): RestComic => ({
  id: 1234,
  title: 'The amazing Jessica Jones',
  description: 'a drunk super girl',
  modified: '10/12/1993',
  thumbnail: {
    path: 'jessica',
    extension: 'jpg',
  },
  urls: [
    {
      type: 'detail',
      url: 'comicDetailsURL',
    },
    {
      type: 'blabla',
      url: 'comicDetailsURL',
    },
  ],
  ...opts,
});

export const createComic = (opts?: Partial<ComicProperties>): Comic =>
  Comic.fromProperties({
    id: 1234,
    title: 'The amazing Jessica Jones',
    description: 'a drunk super girl',
    modified: new Date('10/12/1993'),
    thumbnail: mockComicThumbnail(),
    url: 'comicDetailsURL',
    ...opts,
  });

export const createComicView = (opts?: Partial<ComicProperties>): ComicView => ComicView.fromDomain(createComic({ ...opts }));

export const createComicPage = (opts?: Partial<Page<ComicProperties>>): Page<ComicProperties> => ({
  content: [createComic().properties, createComic().properties],
  itemsNumber: 20,
  itemsPerPage: 3,
  numberOfPages: 7,
  ...opts,
});

export const createComicViewPage = (opts?: Partial<Page<ComicProperties>>): Page<ComicView> => ({
  content: [createComicView(), createComicView()],
  itemsNumber: 20,
  itemsPerPage: 3,
  numberOfPages: 7,
  ...opts,
});

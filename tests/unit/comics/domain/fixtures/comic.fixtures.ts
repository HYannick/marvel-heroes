import { RestComic } from '@/comics/secondary/rest/RestComic';
import { Comic, ComicProperties } from '@/comics/domain/Comic';
import { Page } from '@/common/domain/Page';
import { ComicView } from '@/comics/primary/view/ComicView';
import { mockThumbnail } from '@unit/common/domain/fixtures/thumbnail.fixtures';

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
    thumbnail: mockThumbnail(),
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

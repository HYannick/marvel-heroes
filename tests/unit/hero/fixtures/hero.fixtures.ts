import { RestHero } from '@/heroes/secondary/rest/RestHero';
import { Hero, HeroProperties, HeroUrlType } from '@/heroes/domain/Hero';
import { Page } from '@/common/domain/Page';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { mockThumbnail } from '@unit/common/domain/fixtures/thumbnail.fixtures';

export const createRestHero = (opts?: Partial<RestHero>): RestHero => ({
  id: 1234,
  name: 'Jessica Jones',
  description: 'a drunk super girl',
  modified: '10/12/1993',
  thumbnail: {
    path: 'jessica',
    extension: 'jpg',
  },
  urls: [
    {
      type: 'detail',
      url: 'detailsUrl',
    },
    {
      type: 'wiki',
      url: 'wikiUrl',
    },
    {
      type: 'comiclink',
      url: 'comicLinkUrl',
    },
  ],
  ...opts,
});

export const createHero = (opts?: Partial<HeroProperties>): Hero =>
  Hero.fromProperties({
    id: 1234,
    name: 'Jessica Jones',
    description: 'a drunk super girl',
    modified: new Date('10/12/1993'),
    thumbnail: mockThumbnail(),
    urls: [
      {
        type: HeroUrlType.DETAIL,
        url: 'detailsUrl',
      },
      {
        type: HeroUrlType.WIKI,
        url: 'wikiUrl',
      },
      {
        type: HeroUrlType.COMIC_LIST,
        url: 'comicLinkUrl',
      },
    ],
    ...opts,
  });

export const createHeroView = (opts?: Partial<HeroProperties>): HeroView => HeroView.fromDomain(createHero({ ...opts }));

export const createHeroPage = (opts?: Partial<Page<HeroProperties>>): Page<HeroProperties> => ({
  content: [createHero().properties, createHero().properties],
  itemsNumber: 20,
  itemsPerPage: 3,
  numberOfPages: 7,
  ...opts,
});

export const createHeroViewPage = (opts?: Partial<Page<HeroProperties>>): Page<HeroView> => ({
  content: [createHeroView(), createHeroView()],
  itemsNumber: 20,
  itemsPerPage: 3,
  numberOfPages: 7,
  ...opts,
});

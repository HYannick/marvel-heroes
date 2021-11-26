import { RestHero } from '@/heroes/secondary/rest/RestHero';
import { Hero, HeroProperties } from '@/heroes/domain/Hero';
import { Page } from '@/common/domain/Page';
import { HeroView } from '@/heroes/primary/view/HeroView';

export const mockHeroThumbnail = (path = 'jessica', extension = 'jpg') => ({
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

export const createRestHero = (opts?: Partial<RestHero>): RestHero => ({
  id: 1234,
  name: 'Jessica Jones',
  description: 'a drunk super girl',
  modified: '10/12/1993',
  thumbnail: {
    path: 'jessica',
    extension: 'jpg',
  },
  ...opts,
});

export const createHero = (opts?: Partial<HeroProperties>): Hero =>
  Hero.fromProperties({
    id: 1234,
    name: 'Jessica Jones',
    description: 'a drunk super girl',
    modified: new Date('10/12/1993'),
    thumbnail: mockHeroThumbnail(),
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

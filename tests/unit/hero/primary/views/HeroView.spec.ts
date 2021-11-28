import { createHero } from '../../fixtures/hero.fixtures';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { mockThumbnail } from '@unit/common/domain/fixtures/thumbnail.fixtures';
import { HeroUrlType } from '@/heroes/domain/Hero';

describe('HeroView', () => {
  it('should get Hero view from Hero', () => {
    const heroView = HeroView.fromDomain(createHero());
    expect(heroView).toBeInstanceOf(HeroView);
    expect(heroView).toEqual({
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
    });
  });
});

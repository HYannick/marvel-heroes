import { createHero, mockHeroThumbnail } from '../../fixtures/hero.fixtures';
import { HeroView } from '@/heroes/primary/view/HeroView';

describe('HeroView', () => {
  it('should get Hero view from Hero', () => {
    const heroView = HeroView.fromDomain(createHero());
    expect(heroView).toBeInstanceOf(HeroView);
    expect(heroView).toEqual({
      id: 1234,
      name: 'Jessica Jones',
      description: 'a drunk super girl',
      modified: new Date('10/12/1993'),
      thumbnail: mockHeroThumbnail(),
    });
  });
});

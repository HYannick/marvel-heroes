import { RestHero } from '@/heroes/secondary/rest/RestHero';
import { createRestHero } from '../../fixtures/hero.fixtures';
import { mockThumbnail } from '@unit/common/domain/fixtures/thumbnail.fixtures';

describe('RestHero', () => {
  it('should instanciate a RestHero', () => {
    const restThumbnail = {
      path: 'ms-marvel',
      extension: 'jpg',
    };

    const restUrls = [
      {
        type: 'dumbType',
        url: 'stubbedUrl',
      },
    ];
    expect(new RestHero(1234, 'Ms Marvel', 'The true hero', '10/12/1990', restThumbnail, restUrls)).toBeInstanceOf(RestHero);
  });

  it('should create a domain Hero from RestHero', () => {
    const hero = RestHero.toDomain(createRestHero());
    expect(hero.properties).toEqual({
      id: 1234,
      name: 'Jessica Jones',
      description: 'a drunk super girl',
      modified: new Date('10/12/1993'),
      thumbnail: mockThumbnail(),
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
    });
  });
});

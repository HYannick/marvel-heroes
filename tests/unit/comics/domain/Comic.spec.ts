import { Comic, ComicProperties } from '@/comics/domain/Comic';
import { mockThumbnail } from '@unit/common/domain/fixtures/thumbnail.fixtures';

const mockedHeroThumbnail = mockThumbnail('ms-marvel', 'jpg');
const comicProperties: ComicProperties = {
  id: 1234,
  title: 'Ms Marvel',
  thumbnail: mockedHeroThumbnail,
  modified: new Date('10/12/1990'),
  description: 'The true hero',
  url: 'comicDetailsURL',
};

describe('Comic', () => {
  it('should instanciate a Comic from ComicProperties', () => {
    const comic = Comic.fromProperties(comicProperties);
    expect(comic).toBeInstanceOf(Comic);
    expect(comic.properties).toEqual({
      id: 1234,
      title: 'Ms Marvel',
      thumbnail: {
        portrait: {
          small: 'ms-marvel/portrait_small.jpg',
          medium: 'ms-marvel/portrait_medium.jpg',
          xlarge: 'ms-marvel/portrait_xlarge.jpg',
          fantastic: 'ms-marvel/portrait_fantastic.jpg',
          uncanny: 'ms-marvel/portrait_uncanny.jpg',
        },
        standard: {
          small: 'ms-marvel/standard_small.jpg',
          medium: 'ms-marvel/standard_medium.jpg',
          xlarge: 'ms-marvel/standard_xlarge.jpg',
          fantastic: 'ms-marvel/standard_fantastic.jpg',
          uncanny: 'ms-marvel/standard_uncanny.jpg',
        },
        landscape: {
          small: 'ms-marvel/landscape_small.jpg',
          medium: 'ms-marvel/landscape_medium.jpg',
          xlarge: 'ms-marvel/landscape_xlarge.jpg',
          fantastic: 'ms-marvel/landscape_fantastic.jpg',
          uncanny: 'ms-marvel/landscape_uncanny.jpg',
        },
        fullsize: 'ms-marvel.jpg',
        detail: 'ms-marvel/detail.jpg',
      },
      modified: new Date('10/12/1990'),
      description: 'The true hero',
      url: 'comicDetailsURL',
    });
  });
});

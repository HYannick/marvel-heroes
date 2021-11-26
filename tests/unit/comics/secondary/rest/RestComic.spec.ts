import { RestComic } from '@/comics/secondary/rest/RestComic';
import { createRestComic, mockComicThumbnail } from '@unit/comics/domain/fixtures/comic.fixtures';

const comicUrls = [
  {
    type: 'detail',
    url: 'comicDetailsURL',
  },
  {
    type: 'someType',
    url: 'otherComicDetailsURL',
  },
];
describe('RestComic', () => {
  it('should instanciate a RestComic', () => {
    expect(
      new RestComic(
        1234,
        'Ms Marvel',
        'The true hero',
        '10/12/1990',
        {
          path: 'ms-marvel',
          extension: 'jpg',
        },
        comicUrls
      )
    ).toBeInstanceOf(RestComic);
  });

  it('should create a domain Comic from RestComic', () => {
    const comic = RestComic.toDomain(createRestComic());
    expect(comic.properties).toEqual({
      id: 1234,
      title: 'The amazing Jessica Jones',
      description: 'a drunk super girl',
      modified: new Date('10/12/1993'),
      thumbnail: mockComicThumbnail(),
      url: 'comicDetailsURL',
    });
  });

  it('should set empty comic url if no match', () => {
    const comic = RestComic.toDomain(createRestComic({ urls: [{ type: 'dumb', url: 'enamora' }] }));
    expect(comic.properties).toEqual({
      id: 1234,
      title: 'The amazing Jessica Jones',
      description: 'a drunk super girl',
      modified: new Date('10/12/1993'),
      thumbnail: mockComicThumbnail(),
      url: '',
    });
  });
});

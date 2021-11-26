import { HeroResource } from '@/heroes/secondary/resource/HeroResource';
import { createRestHero, mockHeroThumbnail } from '../../fixtures/hero.fixtures';
import { createRestComic, mockComicThumbnail } from '@unit/comics/domain/fixtures/comic.fixtures';

let axios: any;

describe('Hero Resource', () => {
  beforeEach(() => {
    axios = {
      get: jest.fn(),
    };
  });

  it('should fail to get heroes', async () => {
    expect.assertions(1);
    axios.get.mockRejectedValue({
      data: {
        count: 5,
        limit: 3,
        total: 20,
        offset: 0,
        results: [],
      },
    });
    const heroResource = new HeroResource(axios);
    const params = { limit: 20 };
    const heroesList = await heroResource.getHeroes(params);
    expect(heroesList).toEqual({
      content: [],
      itemsNumber: 0,
      itemsPerPage: 0,
      numberOfPages: 0,
    });
  });

  it('should fail to get hero details', async () => {
    expect.assertions(1);
    axios.get.mockRejectedValue({
      data: {
        data: {
          results: [],
        },
      },
    });
    const heroResource = new HeroResource(axios);
    const heroDetails = await heroResource.getHeroDetails(1234);
    expect(heroDetails).toBeNull();
  });

  it('should get heroes', async () => {
    expect.assertions(3);
    axios.get.mockResolvedValue({
      data: {
        data: {
          count: 5,
          limit: 3,
          total: 20,
          offset: 0,
          results: [
            createRestHero({ name: 'Spiderman', description: 'the spidey' }),
            createRestHero({
              id: 5678,
              name: 'Ms Marvel',
              description: 'the true hero',
            }),
          ],
        },
      },
    });
    const heroResource = new HeroResource(axios);
    const params = { limit: 20, offset: 20 };
    const heroesList = await heroResource.getHeroes(params);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters`, {
      params: {
        limit: 20,
        offset: 20,
        apikey: process.env.VUE_APP_BACKEND_API_KEY,
      },
    });
    expect(heroesList).toEqual({
      content: [
        {
          id: 1234,
          name: 'Spiderman',
          description: 'the spidey',
          modified: new Date('10/12/1993'),
          thumbnail: mockHeroThumbnail(),
        },
        {
          id: 5678,
          name: 'Ms Marvel',
          description: 'the true hero',
          modified: new Date('10/12/1993'),
          thumbnail: mockHeroThumbnail(),
        },
      ],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });

  it('should get hero details', async () => {
    expect.assertions(3);
    axios.get.mockResolvedValue({
      data: {
        data: {
          results: [createRestHero()],
        },
      },
    });
    const heroResource = new HeroResource(axios);
    const heroDetails = await heroResource.getHeroDetails(12345);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters/12345`, {
      params: { apikey: 'c93257b8bd3769e578d087c99c2ddadc' },
    });
    expect(heroDetails).toEqual({
      id: 1234,
      name: 'Jessica Jones',
      description: 'a drunk super girl',
      modified: new Date('10/12/1993'),
      thumbnail: mockHeroThumbnail(),
    });
  });

  it('should fail to get hero comics', async () => {
    axios.get.mockRejectedValue({
      data: {
        data: {
          count: 5,
          limit: 3,
          total: 20,
          offset: 0,
          results: [],
        },
      },
    });
    const heroResource = new HeroResource(axios);
    const heroComics = await heroResource.getHeroComics(12345);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters/12345/comics`, {
      params: { apikey: 'c93257b8bd3769e578d087c99c2ddadc' },
    });

    expect(heroComics).toEqual({
      content: [],
      itemsNumber: 0,
      itemsPerPage: 0,
      numberOfPages: 0,
    });
  });

  it('should get hero comics', async () => {
    axios.get.mockResolvedValue({
      data: {
        data: {
          count: 5,
          limit: 3,
          total: 20,
          offset: 0,
          results: [createRestComic()],
        },
      },
    });
    const heroResource = new HeroResource(axios);
    const heroComics = await heroResource.getHeroComics(12345);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters/12345/comics`, {
      params: { apikey: 'c93257b8bd3769e578d087c99c2ddadc' },
    });

    expect(heroComics).toEqual({
      content: [
        {
          id: 1234,
          title: 'The amazing Jessica Jones',
          description: 'a drunk super girl',
          modified: new Date('10/12/1993'),
          thumbnail: mockComicThumbnail(),
          url: 'comicDetailsURL',
        },
      ],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });
});

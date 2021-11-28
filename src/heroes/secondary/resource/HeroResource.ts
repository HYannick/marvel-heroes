import { HeroRepository } from '@/heroes/domain/repository/HeroRepository';
import { AxiosInstance } from 'axios';
import { RestHero } from '@/heroes/secondary/rest/RestHero';
import { Hero } from '@/heroes/domain/Hero';
import { Page } from '@/common/domain/Page';
import { RestPage, toPage } from '@/common/secondary/rest/RestPage';
import { RestPagination } from '@/common/secondary/rest/RestPagination';
import { HeroId } from '@/heroes/domain/HeroId';
import { Comic } from '@/comics/domain/Comic';
import { RestComic } from '@/comics/secondary/rest/RestComic';
import AppStore from '@/app/secondary/vuex/AppStore';

export class HeroResource implements HeroRepository {
  constructor(private axios: AxiosInstance, private appStore: AppStore) {}

  async getHeroes(params: RestPagination): Promise<Page<Hero>> {
    try {
      const {
        data: { data: heroes },
      } = await this.axios.get<{
        data: RestPage<RestHero>;
      }>(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters`, {
        params: {
          limit: params.limit,
          offset: params.offset,
          apikey: process.env.VUE_APP_BACKEND_API_KEY,
        },
      });
      const toHeroesPage = toPage(RestHero.toDomain);
      return toHeroesPage(heroes);
    } catch (e) {
      return {
        content: [],
        itemsNumber: 0,
        itemsPerPage: 0,
        numberOfPages: 0,
      };
    }
  }

  async getHeroDetails(heroId: HeroId): Promise<Hero | null> {
    try {
      const {
        data: {
          data: { results },
        },
      } = await this.axios.get<{
        data: { results: RestHero[] };
      }>(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters/${heroId}`, {
        params: {
          apikey: process.env.VUE_APP_BACKEND_API_KEY,
        },
      });

      await this.appStore.setCurrentHeroDetails(RestHero.toDomain(results[0]).properties);

      return RestHero.toDomain(results[0]);
    } catch (e) {
      return null;
    }
  }

  async getHeroComics(heroId: HeroId): Promise<Page<Comic>> {
    try {
      const {
        data: { data: comics },
      } = await this.axios.get<{
        data: RestPage<RestComic>;
      }>(`${process.env.VUE_APP_BACKEND_BASE_URL}/v1/public/characters/${heroId}/comics`, {
        params: {
          apikey: process.env.VUE_APP_BACKEND_API_KEY,
        },
      });
      const toComicsPage = toPage(RestComic.toDomain);
      return toComicsPage(comics);
    } catch (e) {
      return {
        content: [],
        itemsNumber: 0,
        itemsPerPage: 0,
        numberOfPages: 0,
      };
    }
  }
}

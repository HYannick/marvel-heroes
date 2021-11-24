import { HeroRepository } from "@/heroes/domain/repository/HeroRepository";
import { GetHeroesUseCase } from "@/heroes/primary/use-cases/GetHeroesUseCase";
import { RestPagination } from "@/common/secondary/rest/RestPagination";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { Page } from "@/common/domain/Page";
import { HeroId } from "@/heroes/domain/HeroId";
import { GetHeroDetailsUseCase } from "@/heroes/primary/use-cases/GetHeroDetailsUseCase";

export class HeroService {
  private getHeroesUseCase: GetHeroesUseCase;
  private getHeroDetailsUseCase: GetHeroDetailsUseCase;
  constructor(private heroRepository: HeroRepository) {
    this.getHeroesUseCase = new GetHeroesUseCase(heroRepository);
    this.getHeroDetailsUseCase = new GetHeroDetailsUseCase(heroRepository);
  }

  async getHeroes(pagination: RestPagination): Promise<Page<HeroView>> {
    return await this.getHeroesUseCase.execute(pagination);
  }

  async getHeroDetails(heroId: HeroId): Promise<HeroView | null> {
    return await this.getHeroDetailsUseCase.execute(heroId);
  }
}
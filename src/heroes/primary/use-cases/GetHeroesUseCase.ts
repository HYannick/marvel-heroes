import { HeroRepository } from "@/heroes/domain/repository/HeroRepository";
import { RestPagination } from "@/common/secondary/rest/RestPagination";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { Page } from "@/common/domain/Page";

export class GetHeroesUseCase {
  constructor(private heroRepository: HeroRepository) {}

  async execute(pagination: RestPagination): Promise<Page<HeroView>> {
    const page = await this.heroRepository.getHeroes(pagination);

    return {
      ...page,
      content: page.content.map((hero) => HeroView.fromDomain(hero)),
    };
  }
}

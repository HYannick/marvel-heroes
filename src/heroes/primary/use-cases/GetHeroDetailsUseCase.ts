import { HeroRepository } from "@/heroes/domain/repository/HeroRepository";
import { HeroView } from "@/heroes/primary/view/HeroView";
import { HeroId } from "@/heroes/domain/HeroId";

export class GetHeroDetailsUseCase {
  constructor(private heroRepository: HeroRepository) {}

  async execute(heroId: HeroId): Promise<HeroView | null> {
    const hero = await this.heroRepository.getHeroDetails(heroId);

    if (!hero) {
      return null;
    }

    return HeroView.fromDomain(hero);
  }
}

import { Vue } from 'vue-class-component';
import { Inject, Prop } from 'vue-property-decorator';
import { HeroService } from '@/heroes/primary/HeroService';
import { HeroView } from '@/heroes/primary/view/HeroView';
import { ComicView } from '@/comics/primary/view/ComicView';

export default class HeroDetailsComponent extends Vue {
  @Prop()
  details!: HeroView;

  @Inject()
  heroService!: HeroService;

  relatedComics: ComicView[] = [];

  goBack() {
    this.$emit('closeDetails');
  }

  async getComics() {
    const comicsPage = await this.heroService.getHeroComics(this.details.id);
    this.relatedComics = comicsPage.content;
  }

  created() {
    this.getComics();
  }
}

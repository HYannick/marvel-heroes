import { Vue } from "vue-class-component";
import { Inject, Prop } from "vue-property-decorator";
import { HeroService } from "@/heroes/primary/HeroService";
import { HeroView } from "@/heroes/primary/view/HeroView";

export default class HeroDetailsComponent extends Vue {
  @Prop()
  details: HeroView | null = null;

  goBack() {
    this.$emit("closeDetails");
  }
}

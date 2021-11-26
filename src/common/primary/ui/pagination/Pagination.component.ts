import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class PaginationComponent extends Vue {
  @Prop()
  activePage!: number;

  @Prop()
  totalNumberOfPages!: number;

  currentPage = 1;

  goNext() {
    this.currentPage += 1;
    if (this.currentPage > this.totalNumberOfPages) this.currentPage = this.totalNumberOfPages;
    this.$emit('updatedPage', this.currentPage);
  }

  goPrev() {
    this.currentPage -= 1;
    if (this.currentPage < 1) this.currentPage = 1;
    this.$emit('updatedPage', this.currentPage);
  }
}

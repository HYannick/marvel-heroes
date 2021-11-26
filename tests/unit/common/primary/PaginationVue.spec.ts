import { VueWrapper, shallowMount } from '@vue/test-utils';
import { PaginationComponent, PaginationVue } from '@/common/primary/ui/pagination';

let wrapper: VueWrapper<PaginationComponent>;
let paginationComponent: PaginationComponent;

type WrapperProps = {
  activePage: number;
  numberOfItemsPerPage: number;
  totalNumberOfPages: number;
};

const DEFAULT_ACTIVE_PAGE = 1;
const DEFAULT_ITEMS_PER_PAGE = 20;
const DEFAULT_TOTAL_PAGES = 5;

const createWrapper = (customProps?: Partial<WrapperProps>) => {
  wrapper = shallowMount(PaginationVue, {
    props: {
      activePage: DEFAULT_ACTIVE_PAGE,
      numberOfItemsPerPage: DEFAULT_ITEMS_PER_PAGE,
      totalNumberOfPages: DEFAULT_TOTAL_PAGES,
      ...customProps,
    },
  });
  paginationComponent = wrapper.vm;
  return paginationComponent;
};
describe('PaginationVue', () => {
  it('should be a vue instance', () => {
    createWrapper();
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have default offset and limit', () => {
    expect(paginationComponent.currentPage).toBe(1);
  });

  it('should go to next page', () => {
    createWrapper();
    paginationComponent.goNext();
    expect(paginationComponent.currentPage).toBe(2);
    paginationComponent.goNext();
    expect(paginationComponent.currentPage).toBe(3);
  });

  it('should go to previous page', () => {
    createWrapper();
    paginationComponent.goNext();
    paginationComponent.goNext();
    paginationComponent.goPrev();
    expect(paginationComponent.currentPage).toBe(2);
  });

  it('should set currentPage at 1 if currentPage under 1', () => {
    createWrapper();
    paginationComponent.goPrev();
    expect(paginationComponent.currentPage).toBe(1);
  });

  it('should set currentPage to max if maxPage', () => {
    createWrapper();
    paginationComponent.currentPage = 5;
    paginationComponent.goNext();
    expect(paginationComponent.currentPage).toBe(5);
  });

  it('should emit event on navigation', () => {
    createWrapper();
    paginationComponent.goNext();
    expect(wrapper.emitted().updatedPage).toBeTruthy();
    expect(wrapper.emitted().updatedPage[0]!).toEqual([2]);
    paginationComponent.goPrev();
    expect(wrapper.emitted().updatedPage[1]!).toEqual([1]);
  });
});

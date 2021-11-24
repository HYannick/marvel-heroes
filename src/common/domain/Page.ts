export interface Page<T> {
  content: T[];
  itemsNumber: number;
  itemsPerPage: number;
  numberOfPages: number;
}

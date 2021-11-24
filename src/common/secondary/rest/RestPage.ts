import { Page } from "@/common/domain/Page";

export interface RestPage<T> {
  results: T[];
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export const toPage =
  <R, T>(toDomain: (rest: R) => T) =>
  (restPage: RestPage<R>): Page<T> => ({
    content: restPage.results.map(toDomain),
    itemsPerPage: restPage.limit,
    numberOfPages: Math.round(restPage.total / restPage.limit),
    itemsNumber: restPage.total,
  });

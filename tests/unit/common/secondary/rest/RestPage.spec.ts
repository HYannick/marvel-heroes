import { RestPage, toPage } from '@/common/secondary/rest/RestPage';

interface FakeField {
  field: string;
}

const toDomain = (str: string): FakeField => ({
  field: str,
});

describe('RestPage', () => {
  it('should transform RestPage to Page', () => {
    const restPage: RestPage<string> = {
      results: ['first', 'second', 'third'],
      count: 5,
      limit: 3,
      total: 20,
      offset: 0,
    };

    expect(toPage<string, FakeField>(toDomain)(restPage)).toEqual({
      content: [
        {
          field: 'first',
        },
        {
          field: 'second',
        },
        {
          field: 'third',
        },
      ],
      itemsNumber: 20,
      itemsPerPage: 3,
      numberOfPages: 7,
    });
  });
});

import { RestThumbnail } from '@/common/secondary/rest/RestThumbnail';

describe('RestThumbnail', () => {
  it('should transform RestThumbnail to Thumbnail', () => {
    expect(RestThumbnail.toDomain({ path: 'jessica', extension: 'png' })).toEqual({
      portrait: {
        small: 'jessica/portrait_small.png',
        medium: 'jessica/portrait_medium.png',
        xlarge: 'jessica/portrait_xlarge.png',
        fantastic: 'jessica/portrait_fantastic.png',
        uncanny: 'jessica/portrait_uncanny.png',
      },
      standard: {
        small: 'jessica/standard_small.png',
        medium: 'jessica/standard_medium.png',
        xlarge: 'jessica/standard_xlarge.png',
        fantastic: 'jessica/standard_fantastic.png',
        uncanny: 'jessica/standard_uncanny.png',
      },
      landscape: {
        small: 'jessica/landscape_small.png',
        medium: 'jessica/landscape_medium.png',
        xlarge: 'jessica/landscape_xlarge.png',
        fantastic: 'jessica/landscape_fantastic.png',
        uncanny: 'jessica/landscape_uncanny.png',
      },
      fullsize: 'jessica.png',
      detail: 'jessica/detail.png',
    });
  });
});

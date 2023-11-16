import { Thumbnail } from '@/common/domain/Thumbnail';

export class RestThumbnail {
  constructor(
    public readonly path: string,
    public readonly extension: string
  ) {}

  static toDomain({ path, extension }: RestThumbnail): Thumbnail {
    return {
      portrait: {
        small: `${path}/portrait_small.${extension}`,
        medium: `${path}/portrait_medium.${extension}`,
        xlarge: `${path}/portrait_xlarge.${extension}`,
        fantastic: `${path}/portrait_fantastic.${extension}`,
        uncanny: `${path}/portrait_uncanny.${extension}`,
      },
      standard: {
        small: `${path}/standard_small.${extension}`,
        medium: `${path}/standard_medium.${extension}`,
        xlarge: `${path}/standard_xlarge.${extension}`,
        fantastic: `${path}/standard_fantastic.${extension}`,
        uncanny: `${path}/standard_uncanny.${extension}`,
      },
      landscape: {
        small: `${path}/landscape_small.${extension}`,
        medium: `${path}/landscape_medium.${extension}`,
        xlarge: `${path}/landscape_xlarge.${extension}`,
        fantastic: `${path}/landscape_fantastic.${extension}`,
        uncanny: `${path}/landscape_uncanny.${extension}`,
      },
      fullsize: `${path}.${extension}`,
      detail: `${path}/detail.${extension}`,
    };
  }
}

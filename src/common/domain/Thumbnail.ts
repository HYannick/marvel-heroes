export type ThumbnailSizes = {
  small: string;
  medium: string;
  xlarge: string;
  fantastic: string;
  uncanny: string;
};

export interface Thumbnail {
  portrait: ThumbnailSizes;
  standard: ThumbnailSizes;
  landscape: ThumbnailSizes;
  fullsize: string;
  detail: string;
}

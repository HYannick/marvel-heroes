import { RestThumbnail } from '@/common/secondary/rest/RestThumbnail';

export const mockThumbnail = (path = 'jessica', extension = 'jpg') => RestThumbnail.toDomain({ path, extension });

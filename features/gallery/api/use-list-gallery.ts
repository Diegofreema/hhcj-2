import { useQuery } from '@tanstack/react-query';
import { listGallery } from '../services';
import { GalleryRequestType } from '../type';

export const useListGallery = ({ limit, page }: GalleryRequestType) => {
  return useQuery({
    queryKey: ['gallery', limit, page],
    queryFn: () => listGallery({ limit, page }),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

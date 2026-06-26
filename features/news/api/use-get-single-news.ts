import { useQuery } from '@tanstack/react-query';
import { getNews } from '../services';

export const useGetSingleNews = (id: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => getNews(id),
    staleTime: 5 * 60 * 1000,
    retry: 4,
    enabled: !!id,
  });
};

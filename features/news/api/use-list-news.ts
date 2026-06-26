import { useQuery } from '@tanstack/react-query';
import { listNews } from '../services';
import { NewsRequestType } from '../types';

export const useListNews = ({ limit, page, search }: NewsRequestType) => {
  return useQuery({
    queryKey: ['news', limit, page, search],
    queryFn: () => listNews({ limit, page, search }),
    staleTime: 5 * 60 * 1000,
    retry: 4,
  });
};

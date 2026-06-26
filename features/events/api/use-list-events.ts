import { useQuery } from '@tanstack/react-query';
import { listEvents } from '../services';
import { EventRequestType } from '../types';

export const useListEvents = ({ limit, page }: EventRequestType) => {
  return useQuery({
    queryKey: ['events', limit, page],
    queryFn: () => listEvents({ limit, page }),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

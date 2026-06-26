import axios from 'axios';
import { API_BASE_URL } from '@/lib/constants/constants';
import { EventByIdType, EventRequestType, EventResponseType } from './types';

export const listEvents = async ({ limit, page }: EventRequestType) => {
  try {
    const { data } = await axios.get<EventResponseType>(
      `${API_BASE_URL}/events?page=${page}&limit=${limit}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
export const getEventById = async ({ id }: { id: string }) => {
  try {
    const { data } = await axios.get<EventByIdType>(
      `${API_BASE_URL}/events?id=${id}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

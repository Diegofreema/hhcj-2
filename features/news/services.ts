import axios from 'axios';
import { API_BASE_URL } from '@/lib/constants/constants';
import { NewsRequestType, NewsResponseType, NewsType } from './types';

export const listNews = async ({ limit, page, search }: NewsRequestType) => {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
    });

    if (search) {
      params.append('search', search);
    }

    const { data } = await axios.get<NewsResponseType>(
      `${API_BASE_URL}/news/active?${params.toString()}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNews = async (id: string) => {
  try {
    const { data } = await axios.get<{ success: boolean; news: NewsType }>(
      `${API_BASE_URL}/news/active?id=${id}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching single news:', error);
    throw error;
  }
};

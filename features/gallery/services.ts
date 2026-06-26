import axios from 'axios';
import { GalleryRequestType, GalleryResponseType } from './type';
import { url } from '@/lib/constants/constants';

export const listGallery = async ({ limit, page }: GalleryRequestType) => {
  try {
    const { data } = await axios.get<GalleryResponseType>(
      `${url}/api/gallery?page=${page}&limit=${limit}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw error;
  }
};

import { API_BASE_URL } from '@/lib/constants/constants';
import axios from 'axios';
import { SendEmailInput } from './types';

export const sendEmail = async ({
  fullName,
  email,
  subject,
  message,
}: SendEmailInput) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/contact`, {
      fullName,
      email,
      subject,
      message,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

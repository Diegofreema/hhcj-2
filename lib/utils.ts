import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createExcerpt = (content: string, length: number = 100) => {
  if (!content) return '';
  const text = content.replace(/<[^>]*>?/gm, ''); // Basic strip tags
  return text.length > length ? text.substring(0, length) + '...' : text;
};

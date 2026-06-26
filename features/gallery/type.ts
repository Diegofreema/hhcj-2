export interface GalleryRequestType {
  limit: number;
  page: number;
}

export interface GalleryResponseType {
  success: boolean;
  images: GalleryType[];
  currentPage: number;
  totalPages: number;
}

export interface GalleryType {
  _id: string;
  filename: string;
  url: string;
  altText: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

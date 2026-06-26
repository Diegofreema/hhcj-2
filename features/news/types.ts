export type NewsRequestType = {
  page: number;
  limit: number;
  search?: string;
};

export type NewsResponseType = {
  success: boolean;
  total: number;
  page: number;
  news: NewsType[];
};

export type NewsType = {
  _id: string;
  title: string;
  content: string;
  newsTag: string;
  images: [
    {
      filename: string;
      url: string;
      originalName: string;
      _id: string;
    },
  ];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

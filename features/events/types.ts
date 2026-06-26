export type EventRequestType = {
  page: number;
  limit: number;
};

export type EventResponseType = {
  success: true;
  events: EventType[];
  total: number;
};

export type EventByIdType = {
  success: true;
  event: EventType;
};

export type EventType = {
  _id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  createdAt: string;
  __v: number;
};

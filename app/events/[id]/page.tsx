import { getEventById } from '@/features/events/services';
import { EventDetailClient } from './event-detail-page';

type Props = {
  params: Promise<{ id: string }>;
};

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const event = await getEventById({ id });

  return (
    <div className="min-h-screen">
      <EventDetailClient event={event.event} />
    </div>
  );
};

export default EventDetailPage;

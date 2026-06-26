'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { EventType } from '@/features/events/types';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import Link from 'next/link';

type Props = {
  event: EventType;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const EventDetailClient = ({ event }: Props) => {
  const eventDate = new Date(event.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(eventDate);

  const isZoom = event.location.toLowerCase().includes('zoom');
  const isVirtual = isZoom || event.location.toLowerCase().includes('online');

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
        .catch(console.error);
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      // Fallback: toast would be good here
    }
  };

  const zoomLink = event.location.split('Zoom :  ')[1];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="relative">
        <PageHero title={event.title} description={'Event Details'} />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
          <Link href="/events">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 gap-2 backdrop-blur-sm"
            >
              <ArrowLeft size={18} />
              <span>Back to Events</span>
            </Button>
          </Link>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 -mt-12 sm:-mt-16 md:-mt-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <Card className="p-5 sm:p-8 md:p-12 border-primary/10 shadow-xl shadow-primary/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-sm font-medium"
                >
                  {isVirtual ? 'Virtual Event' : 'In-Person'}
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm font-medium border-primary/20 text-primary"
                >
                  Upcoming
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {isZoom ? 'Event Link & Details' : 'About this Event'}
              </h2>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>

              <Separator className="my-10 opacity-50" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary/70">
                    When
                  </h4>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl text-primary">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {formattedDate}
                      </p>
                      <p className="text-muted-foreground">
                        {event.startTime} - {event.endTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary/70">
                    Where
                  </h4>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl text-primary">
                      {isZoom ? (
                        <div className="size-6 bg-primary rounded-sm overflow-hidden flex items-center justify-center text-white font-bold text-[10px]">
                          Z
                        </div>
                      ) : (
                        <MapPin size={24} />
                      )}
                    </div>
                    <div>
                      {isZoom ? (
                        <Link href={zoomLink} target="_blank">
                          <button className="text-sm text-primary hover:underline font-medium mt-1">
                            Join Meeting
                          </button>
                        </Link>
                      ) : (
                        <div>
                          <p className="font-semibold text-foreground">
                            {isZoom ? zoomLink : event.location}
                          </p>
                        </div>
                      )}
                      {!isVirtual && (
                        <button className="text-sm text-primary hover:underline font-medium mt-1">
                          View on map
                        </button>
                      )}
                      {isZoom && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Online Meeting
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="space-y-6 lg:h-fit" variants={itemVariants}>
            <Card className="p-5 sm:p-6 border-primary/10 bg-muted/30 backdrop-blur-sm lg:sticky lg:top-24">
              <h3 className="text-xl font-bold mb-6">Event Quick Link</h3>

              <div className="space-y-4">
                {isZoom ? (
                  <Button
                    asChild
                    className="w-full bg-[#2D8CFF] hover:bg-[#2D8CFF]/90 text-white shadow-lg shadow-[#2D8CFF]/20 h-12 text-lg font-semibold border-none"
                  >
                    <a
                      href={zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Zoom Meeting
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 h-12 text-lg font-semibold border-none">
                    Register Now
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full h-12 border-primary/20 hover:bg-primary/5 group"
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Share Event
                </Button>
              </div>

              <Separator className="my-6 opacity-50" />

              {!isVirtual ? (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-muted-foreground">
                    Location Highlights
                  </h4>
                  <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center border border-border overflow-hidden group">
                    <div className="text-center p-4">
                      <MapPin
                        className="mx-auto mb-2 text-primary/40 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <p className="text-xs text-muted-foreground px-4">
                        Map view coming soon for {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-muted-foreground">
                    Virtual Meeting Info
                  </h4>
                  <div className="aspect-video w-full rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 overflow-hidden group">
                    <div className="text-center p-4">
                      {isZoom ? (
                        <div className="size-12 bg-[#2D8CFF] rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-2xl">
                          Z
                        </div>
                      ) : (
                        <div className="size-12 bg-primary/20 rounded-lg mx-auto mb-3 flex items-center justify-center text-primary">
                          <MapPin size={24} />
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground px-4">
                        {isZoom
                          ? 'Click the button above to join the Zoom room'
                          : 'Online event link in description'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10 text-pretty">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Reminder</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We recommend arriving 5 minutes before the scheduled start
                  time for virtual meetings.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

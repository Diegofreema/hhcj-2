'use client';

import { useListEvents } from '@/features/events/api/use-list-events';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Search,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const EventClient = () => {
  // Query State
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const router = useRouter();
  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date | null>(
    null,
  );

  // Data Fetching
  const { data, isPending, isError, refetch } = useListEvents({ limit, page });

  // Filter Logic
  const filteredEvents =
    data?.events.filter((event) => {
      // 1. Safely parse the event date
      const eventDate = new Date(event.date);

      // Early exit if date is invalid
      if (isNaN(eventDate.getTime())) {
        console.warn(`Invalid date format: ${event.date}`);
        return false; // or true – depends on your needs
      }

      // 2. Search filter (case-insensitive)
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        searchLower === ''
          ? true
          : event.title?.toLowerCase().includes(searchLower) ||
            event.description?.toLowerCase().includes(searchLower) ||
            event.location?.toLowerCase().includes(searchLower);

      // 3. Date filter logic
      const now = new Date();

      let matchesDate = true;

      if (selectedCalendarDate) {
        // Compare only year / month / day (ignore time)
        matchesDate =
          eventDate.getFullYear() === selectedCalendarDate.getFullYear() &&
          eventDate.getMonth() === selectedCalendarDate.getMonth() &&
          eventDate.getDate() === selectedCalendarDate.getDate();
      } else if (dateFilter === 'upcoming') {
        // Most common intention: events from now onward (including today)
        matchesDate = eventDate >= now;
      } else if (dateFilter === 'past') {
        matchesDate = eventDate < now;
      } else if (dateFilter === 'this-month') {
        matchesDate =
          eventDate.getFullYear() === now.getFullYear() &&
          eventDate.getMonth() === now.getMonth();
      } else if (dateFilter === 'next-month') {
        const nextMonthStart = new Date(
          now.getFullYear(),
          now.getMonth() + 1,
          1,
        );
        const nextMonthEnd = new Date(
          now.getFullYear(),
          now.getMonth() + 2,
          0,
          23,
          59,
          59,
          999,
        );

        matchesDate = eventDate >= nextMonthStart && eventDate <= nextMonthEnd;
      }
      // else → no date filter → show everything

      return matchesSearch && matchesDate;
    }) ?? [];

  const getDayAndMonth = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return {
        day: date.getDate(),
        month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
          date,
        ),
      };
    } catch (e) {
      return { day: '', month: '' };
    }
  };

  // Loading State
  if (isPending) {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Events"
          description="Join us in our mission and community activities"
        />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Events"
          description="Join us in our mission and community activities"
        />
        <div className="text-center py-40">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
            <X className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Something went wrong
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Found error while fetching events.
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Calculate pagination info (if available from API)
  const totalEvents = data?.total || 0;
  const totalPages = Math.ceil(totalEvents / limit);

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Events"
        description="Join us in our mission and community activities"
      />

      {/* Events Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => {
                const { day, month } = getDayAndMonth(event.date);

                return (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                    onClick={() => router.push(`/events/${event._id}`)}
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col items-center bg-primary/5 rounded-lg p-2 min-w-14">
                          <span className="text-2xl font-bold text-primary">
                            {day}
                          </span>
                          <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">
                            {month}
                          </span>
                        </div>
                        {/* Placeholder for category if it existed */}
                        {/* <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                           Category
                         </span> */}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={16} className="text-primary/70" />
                          <span className="text-sm">
                            {event.startTime} - {event.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} className="text-primary/70" />
                          <span className="text-sm line-clamp-1">
                            {event.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                        {event.description}
                      </p>

                      {/* <button className="w-full mt-auto px-4 py-2 border border-primary/20 bg-primary/5 text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                        View Details
                      </button> */}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center p-4 bg-muted/30 rounded-full mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No events found
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Try adjusting your search or filters to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDateFilter('all');
                  setSelectedCalendarDate(null);
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 rounded-lg border border-border hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-sm font-medium text-muted-foreground">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-lg border border-border hover:bg-muted/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

//  <section className="py-12 bg-background border-b border-primary/10">
//    <div className="container mx-auto px-4">
//      <div className="space-y-6">
//        {/* Search Bar */}
//        <div className="relative">
//          <Search
//            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary"
//            size={20}
//          />
//          <input
//            type="text"
//            placeholder="Search events by title, location, or description..."
//            value={searchQuery}
//            onChange={(e) => setSearchQuery(e.target.value)}
//            className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth"
//          />
//        </div>

//        {/* Filter Toggle Button */}
//        <div className="flex items-center justify-between">
//          <button
//            onClick={() => setShowFilters(!showFilters)}
//            className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-smooth"
//          >
//            <Filter size={18} />
//            <span className="font-semibold">Filters</span>
//          </button>

//          {/* Results count */}
//          <span className="text-sm text-muted-foreground">
//            Showing {filteredEvents.length} results
//          </span>
//        </div>

//        {/* Filters Panel */}
//        <AnimatePresence>
//          {showFilters && (
//            <motion.div
//              initial={{ opacity: 0, height: 0 }}
//              animate={{ opacity: 1, height: 'auto' }}
//              exit={{ opacity: 0, height: 0 }}
//              className="overflow-hidden"
//            >
//              <div className="mt-4 p-4 bg-muted/30 border border-primary/10 rounded-lg space-y-4">
//                {/* Date Filter */}
//                <div>
//                  <h4 className="text-sm font-semibold text-foreground mb-3">
//                    Date
//                  </h4>
//                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
//                    {[
//                      { value: 'all', label: 'All Events' },
//                      { value: 'upcoming', label: 'Upcoming' },
//                      { value: 'this-month', label: 'This Month' },
//                      { value: 'next-month', label: 'Next Month' },
//                    ].map((option) => (
//                      <button
//                        key={option.value}
//                        onClick={() => {
//                          setDateFilter(option.value);
//                          setSelectedCalendarDate(null);
//                        }}
//                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
//                          dateFilter === option.value && !selectedCalendarDate
//                            ? 'bg-primary text-white'
//                            : 'bg-muted/50 text-muted-foreground hover:bg-muted'
//                        }`}
//                      >
//                        {option.label}
//                      </button>
//                    ))}
//                  </div>

//                  <CalendarDatePicker
//                    selectedDate={selectedCalendarDate!}
//                    onDateChange={(date) => {
//                      setSelectedCalendarDate(date);
//                      setDateFilter('all');
//                    }}
//                  />
//                </div>

//                {/* Clear Filters */}
//                {(searchQuery ||
//                  dateFilter !== 'all' ||
//                  selectedCalendarDate) && (
//                  <button
//                    onClick={() => {
//                      setSearchQuery('');
//                      setDateFilter('all');
//                      setSelectedCalendarDate(null);
//                    }}
//                    className="flex items-center gap-2 px-3 py-2 text-sm text-primary hover:text-primary-dark transition-smooth"
//                  >
//                    <X size={16} />
//                    Clear all filters
//                  </button>
//                )}
//              </div>
//            </motion.div>
//          )}
//        </AnimatePresence>
//      </div>
//    </div>
//  </section>;

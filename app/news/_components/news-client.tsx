'use client';

import { Input } from '@/components/ui/input';
import { useListNews } from '@/features/news/api/use-list-news';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, Search, X } from 'lucide-react';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { NewsCard } from '@/features/news/components/news-card';

// Helper to strip HTML and create excerpt

// --- Sub-components (Single Responsibility) ---

// --- Main Container ---

const ITEMS_PER_PAGE = 6;

export default function NewsPageClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch] = useDebounce(searchQuery, 500);

  const { data, isPending, isError, refetch } = useListNews({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    search: debouncedSearch || undefined,
  });

  const news = data?.news || [];
  const totalPages = data?.total ? Math.ceil(data.total / ITEMS_PER_PAGE) : 1;

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-background">
        {/* Hero Section Placeholder */}
        <section className="py-20 bg-linear-to-b from-primary/5 to-background border-b border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Latest News & Updates
            </h1>
          </div>
        </section>
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-background">
        <section className="py-20 bg-linear-to-b from-primary/5 to-background border-b border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Latest News & Updates
            </h1>
          </div>
        </section>
        <div className="text-center py-40">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
            <X className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Something went wrong
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Found error while fetching news.
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-primary/5 to-background border-b border-futuristic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest initiatives, achievements, and
              community impact
            </p>
          </motion.div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b border-futuristic sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Search Input */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 py-3 bg-muted border-futuristic focus:border-primary focus:ring-primary transition-smooth"
              />
            </div>

            {/* Category Filter */}

            {/* Results counter */}
            <p className="text-sm text-muted-foreground">
              Showing{' '}
              {news.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0} -{' '}
              {Math.min(currentPage * ITEMS_PER_PAGE, data?.total || 0)} of{' '}
              {data?.total || 0} news articles
            </p>
          </motion.div>
        </div>
      </section>
      {/* News Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {news.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {news.map((item, index) => (
                <NewsCard key={item._id} news={item} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No news found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>
      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-muted/30 border-t border-futuristic">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-futuristic bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Check if page is within range (e.g. current - 1 to current + 1, or first/last)
                    if (
                      totalPages > 7 &&
                      Math.abs(page - currentPage) > 2 &&
                      page !== 1 &&
                      page !== totalPages
                    ) {
                      return null;
                    }
                    return (
                      <motion.button
                        key={page}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-smooth border-futuristic ${
                          currentPage === page
                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                            : 'bg-background text-foreground hover:bg-muted border-muted'
                        }`}
                      >
                        {page}
                      </motion.button>
                    );
                  },
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-futuristic bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>

            {/* Page Info */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

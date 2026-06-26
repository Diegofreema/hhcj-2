'use client';

import { useListGallery } from '@/features/gallery/api/use-list-gallery';
import { GalleryImage } from '@/features/gallery/components/gallery-image';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2, X } from 'lucide-react';
import { useState } from 'react';

export default function GalleryClientPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(9); // 3x3 grid

  const { data, isPending, isError, refetch } = useListGallery({ limit, page });

  if (isPending) {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Photo Gallery"
          description="Moments from our mission and community work"
        />
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Photo Gallery"
          description="Moments from our mission and community work"
        />
        <div className="text-center py-40">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
            <X className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Something went wrong
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Found error while fetching images.
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

  const { images = [], totalPages = 1 } = data || {};

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Photo Gallery"
        description="Moments from our mission and community work"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {images.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((item, index) => (
                  <GalleryImage key={item._id} item={item} index={index} />
                ))}
              </div>

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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No images found in the gallery.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

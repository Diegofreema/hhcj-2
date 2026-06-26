import { PageHero } from '@/features/shared/components/page-hero';
import { Loader2 } from 'lucide-react';
import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Event" description="Loading event..." />
      <div className="flex justify-center items-center py-40">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    </div>
  );
};

export default loading;

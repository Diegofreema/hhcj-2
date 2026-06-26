'use client';

import { Download } from 'lucide-react';
import { useRef } from 'react';

export default function PDFViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Magazine</h1>
          <p className="text-muted-foreground">
            View our latest magazine publication
          </p>
        </div>

        {/* PDF Viewer Container */}
        <div
          ref={containerRef}
          className="w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
          style={{ height: 'calc(100vh - 250px)', minHeight: '600px' }}
        >
          <iframe
            src="/magazine.pdf#navpanes=1&scrollbar=1"
            className="w-full h-full border-0"
            title="Magazine PDF"
            loading="lazy"
          />
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <a
            href="/magazine.pdf"
            download="magazine.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-semibold"
          >
            <Download size={20} />
            Download Magazine
          </a>
        </div>

        {/* Alternative: Open in new tab */}
        <div className="text-center mt-4">
          <a
            href="/magazine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-smooth text-sm underline"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}

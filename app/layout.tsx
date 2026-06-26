import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/features/layout/header';
import { Footer } from '@/features/layout/footer';
import { Providers } from '@/features/shared/components/providers';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HHCJ Foundation - The Handmaids of the Holy Child Jesus',
  description:
    'Serving humanity through education, healthcare, and spiritual mission',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Providers>
          <main>{children}</main>
          <Toaster />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

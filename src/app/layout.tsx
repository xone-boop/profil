import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'X One — Premium Web & UI Developer',
  description: 'Building high-conversion landing pages, SaaS, and e-commerce solutions with pixel-perfect precision and modern tech.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


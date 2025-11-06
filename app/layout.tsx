import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huly-inspired Crypto Analysis | Aegis AI',
  description: 'AI-powered insights, real-time crypto data, and trading assistance in a clean, modern UI.',
  openGraph: {
    title: 'Aegis AI ? Crypto Intelligence',
    description: 'AI-powered insights, real-time data, and trading assistance.',
    url: 'https://agentic-2509a9cf.vercel.app',
    siteName: 'Aegis AI',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis AI ? Crypto Intelligence',
    description: 'AI-powered insights, real-time data, and trading assistance.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

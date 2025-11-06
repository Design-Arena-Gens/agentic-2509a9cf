"use client";
import { motion } from 'framer-motion';
import { AnimatedBackground } from './AnimatedBackground';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="bg-grid absolute inset-0 -z-10 opacity-20" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80"
            aria-label="AI powered analysis and trading assistance"
          >
            <span className="h-2 w-2 rounded-full bg-accentGreen animate-pulse" />
            Real-time AI crypto intelligence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Insight. Velocity. Alpha.
            <span className="block bg-gradient-to-r from-accentBlue to-accentGreen bg-clip-text text-transparent">Aegis AI for Crypto.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl text-white/70 text-lg"
          >
            AI-driven signals, risk scoring, and market context ? designed for speed, clarity,
            and conviction. Built with a Huly-inspired aesthetic for a modern, focused workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#pricing"
              className="focus-ring group rounded-lg bg-accentGreen px-6 py-3 font-medium text-black shadow-glow transition hover:brightness-110"
              aria-label="Get Started"
            >
              Get Started
              <span className="ml-1 inline-block transition group-hover:translate-x-0.5" aria-hidden>?</span>
            </Link>
            <Link
              href="#market"
              className="focus-ring rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
              aria-label="Explore Market Data"
            >
              Explore Market
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 w-full overflow-hidden rounded-xl border border-white/10 bg-surface/60 backdrop-blur supports-[backdrop-filter]:bg-surface/30"
            aria-label="Live crypto snapshot"
          >
            <LiveHeroTicker />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function LiveHeroTicker() {
  const { data } = useSWR('/api/market?per_page=8', fetcher, { refreshInterval: 10000 });
  const items: any[] = data?.coins ?? [];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {items.map((c) => (
        <div key={c.id} className="flex items-center gap-3 p-4 border-r border-b border-white/10 last:border-r-0 md:last:border-r">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.image} alt="" className="h-6 w-6 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">{c.symbol.toUpperCase()}</span>
              <span className="text-sm font-medium">${c.current_price.toLocaleString()}</span>
            </div>
            <Sparkline values={c.sparkline_in_7d?.price?.slice(-40) ?? []} positive={c.price_change_percentage_24h >= 0} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  const w = 140;
  const h = 36;
  if (!values.length) return <div style={{ width: w, height: h }} />;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const norm = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="mt-1">
      <polyline
        fill="none"
        stroke={positive ? '#39FF88' : '#FF4D4D'}
        strokeOpacity="0.9"
        strokeWidth="2"
        points={norm.join(' ')}
      />
    </svg>
  );
}

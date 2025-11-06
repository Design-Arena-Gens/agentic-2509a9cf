"use client";
import useSWR from 'swr';
import { useMemo, useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function MarketSection() {
  const [query, setQuery] = useState('');
  const [onlyPos, setOnlyPos] = useState(false);
  const { data, isLoading } = useSWR('/api/market?per_page=50', fetcher, { refreshInterval: 15000 });
  const coins: any[] = data?.coins ?? [];

  const filtered = useMemo(() => {
    return coins
      .filter((c) => (onlyPos ? c.price_change_percentage_24h >= 0 : true))
      .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.symbol.toLowerCase().includes(query.toLowerCase()));
  }, [coins, query, onlyPos]);

  return (
    <section id="market" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Comprehensive crypto data</h2>
            <p className="text-white/60">Real-time market snapshots, price trends and volume analysis with interactive filters.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              aria-label="Search assets"
              className="focus-ring w-56 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40"
              placeholder="Search assets..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <label className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm">
              <input
                type="checkbox"
                aria-label="Show positive movers"
                checked={onlyPos}
                onChange={(e) => setOnlyPos(e.target.checked)}
              />
              Positive 24h
            </label>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <Th>#</Th>
                <Th>Asset</Th>
                <Th>Price</Th>
                <Th>24h</Th>
                <Th>7d</Th>
                <Th>Volume</Th>
                <Th>Market Cap</Th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-white/60">Loading...</td>
                </tr>
              )}
              {filtered.map((c, idx) => (
                <tr key={c.id} className="border-t border-white/10 hover:bg-white/[0.04]">
                  <Td className="text-white/60">{idx + 1}</Td>
                  <Td>
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt="" className="h-6 w-6" />
                      <div className="flex items-baseline gap-2">
                        <span>{c.name}</span>
                        <span className="text-white/50">{c.symbol.toUpperCase()}</span>
                      </div>
                    </div>
                  </Td>
                  <Td>${c.current_price.toLocaleString()}</Td>
                  <Td>
                    <Delta value={c.price_change_percentage_24h} />
                  </Td>
                  <Td>
                    <Delta value={c.price_change_percentage_7d_in_currency} />
                  </Td>
                  <Td>${c.total_volume.toLocaleString()}</Td>
                  <Td>${c.market_cap.toLocaleString()}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="p-3 text-left font-medium text-white/80">{children}</th>;
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`p-3 ${className}`}>{children}</td>;
}

function Delta({ value }: { value: number }) {
  const pos = value >= 0;
  const v = (value ?? 0).toFixed(2);
  return (
    <span className={pos ? 'text-accentGreen' : 'text-red-400'}>
      {pos ? '?' : '?'} {isFinite(+v) ? v : '0.00'}%
    </span>
  );
}

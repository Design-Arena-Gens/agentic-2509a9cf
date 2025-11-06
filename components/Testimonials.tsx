import { motion } from 'framer-motion';

const items = [
  {
    name: 'Ava ? Quant Trader',
    quote: 'The clarity is unreal. I execute faster with higher conviction.',
  },
  {
    name: 'Kenji ? Crypto Analyst',
    quote: 'Context + signals in one place. It became my default workspace.',
  },
  {
    name: 'Maya ? Portfolio Manager',
    quote: 'Risk scores map to our process. The hit-rate keeps improving.',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-8 text-2xl md:text-3xl font-semibold">Trusted by modern operators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <motion.blockquote
              key={i}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-white/80">?{t.quote}?</p>
              <footer className="mt-4 text-white/60 text-sm">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

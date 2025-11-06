import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI Signals',
    desc: 'Momentum, mean-reversion, and anomaly detection across top markets.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 12h4l2-4 4 8 2-4h4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Risk Scoring',
    desc: 'Volatility-adjusted risk profiles with dynamic position sizing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Context Engine',
    desc: 'Macro + on-chain context woven into each insight.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Backtests',
    desc: 'Replay logic against history for confidence and calibration.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12a7 7 0 1 0 2-5" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 5v4h4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export function FeatureGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">AI-driven insights</h2>
          <p className="text-white/60 max-w-xl">Interactive charts and risk-aware opportunities surfaced by our multi-model ensemble.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-white/10 bg-surface/60 p-5 backdrop-blur transition"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-accentBlue">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
              <div className="mt-4 h-24 rounded-lg bg-gradient-to-tr from-accentBlue/10 to-accentGreen/10" aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

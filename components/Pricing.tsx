import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['Top assets snapshot', 'Basic AI signals', 'Email alerts (weekly)'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/mo',
    features: ['Full market coverage', 'Advanced AI scoring', 'Real-time alerts', 'Backtests'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SLAs & SSO', 'Custom integrations', 'Dedicated support'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-8 text-2xl md:text-3xl font-semibold">Flexible plans for every stage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-accentBlue/50 shadow-glow' : 'border-white/10'} bg-surface/60 p-6 backdrop-blur`}>
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-accentBlue/20 px-2 py-1 text-xs text-accentBlue">Popular</span>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-semibold">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accentGreen" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`focus-ring block w-full rounded-lg px-4 py-2 text-center font-medium transition ${t.highlight ? 'bg-accentGreen text-black hover:brightness-110' : 'border border-white/15 bg-white/5 hover:bg-white/10'}`}
                aria-label={t.cta}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

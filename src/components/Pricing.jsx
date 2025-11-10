import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '₹49',
    period: '/mo',
    popular: false,
    features: [
      '100 automated form fills',
      'Email support',
      'Basic OCR + Voice',
    ],
  },
  {
    name: 'Professional',
    price: '₹149',
    period: '/mo',
    popular: true,
    features: [
      'Unlimited form fills',
      'Priority support',
      'Advanced OCR + Multilingual',
      'Lead scoring module',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'SSO, Roles & Permissions',
      'Private models & on‑prem',
      'Custom integrations',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#070B18] text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pricing that scales with you</h2>
          <p className="mt-3 text-white/70">Start small, grow fast. Switch plans anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border ${
                p.popular ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-white/10 bg-white/5'
              } p-6`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-cyan-400 text-indigo-950 text-xs font-semibold px-2 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-white/70">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ${
                p.popular ? 'bg-cyan-400 text-indigo-950 hover:bg-cyan-300' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Choose {p.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

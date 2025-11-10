import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Maya, Growth @ Rigor Labs',
    text: 'We cut admin time by 68% and doubled qualified demos in 6 weeks.',
  },
  {
    name: 'Arjun, Founder @ LendIQ',
    text: 'Form auto‑fill is magic. Our SDRs spend time talking, not typing.',
  },
  {
    name: 'Zara, Ops @ SwiftHire',
    text: 'Multilingual support unlocked entire regions. Massive impact.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#0A0F22] text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Teams are moving faster with Baynota</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote key={q.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">“{q.text}”</p>
              <footer className="mt-4 text-sm text-white/70">— {q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

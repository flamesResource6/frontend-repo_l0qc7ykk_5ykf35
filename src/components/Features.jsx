import { motion } from 'framer-motion'
import { Languages, Mic, ScanText, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ScanText,
    title: 'OCR scanning',
    desc: 'Parse forms, IDs, and attachments with high‑accuracy OCR.',
  },
  {
    icon: Mic,
    title: 'Voice input',
    desc: 'Dictate responses; our agent structures the data instantly.',
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'Hinglish + regional languages with translation & transliteration.',
  },
  {
    icon: Sparkles,
    title: 'Auto‑fill engine',
    desc: 'Smart selectors auto‑complete web forms across destinations.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0A0F22] text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Features that win deals</h2>
          <p className="mt-3 text-white/70">Designed for speed, accuracy, and scale — with enterprise‑grade controls.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 flex items-center justify-center">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
              <button className="mt-4 text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">See it in action →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

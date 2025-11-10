import { motion } from 'framer-motion'
import { Brain, Clock, FileText, ArrowRight } from 'lucide-react'

const pains = [
  { icon: Clock, title: 'Hours lost on forms', desc: 'Manual input and repetitive fields slow teams down.' },
  { icon: FileText, title: 'Low lead quality', desc: 'Unqualified submissions clog your funnel and waste follow‑ups.' },
  { icon: Brain, title: 'Fragmented workflows', desc: 'Switching tools and contexts kills momentum.' },
]

const solutions = [
  { title: 'OCR + Voice + Translation', desc: 'Scan docs, speak in Hinglish or regional languages, and translate on the fly.' },
  { title: 'Auto‑fill Anywhere', desc: 'Our agent completes web forms with enriched, validated data.' },
  { title: 'API‑first Integrations', desc: 'Plug Baynota into your CRM, sheets, or analytics stack.' },
]

export default function ProblemSolution() {
  return (
    <section className="relative bg-[#070B18] text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The problem</h2>
            <p className="mt-3 text-white/70 max-w-prose">Admin drags deals. Teams juggle tabs, re‑type data, and watch leads go cold. It’s costly, inconsistent, and unscalable.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {pains.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The solution</h2>
            <p className="mt-3 text-white/70 max-w-prose">Baynota’s AI agent captures leads, enriches profiles, and auto‑fills forms across sites. Less typing, more closing.</p>
            <ul className="mt-6 space-y-4">
              {solutions.map((s) => (
                <li key={s.title} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-white/70">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-indigo-900/0 to-indigo-900/0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            AI lead‑gen & form filling SaaS
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Automate your lead‑gen. Fill forms. Close deals.
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl">
            Baynota accelerates revenue with multilingual AI that captures, enriches and auto‑fills forms across the web — so your team stays focused on closing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="pointer-events-auto inline-flex items-center rounded-xl bg-cyan-400 hover:bg-cyan-300 text-indigo-950 font-semibold px-5 py-3 transition-colors">
              Get Started
            </a>
            <a href="#demo" className="pointer-events-auto inline-flex items-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium px-5 py-3">
              See Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

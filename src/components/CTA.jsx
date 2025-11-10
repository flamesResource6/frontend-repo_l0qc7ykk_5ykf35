import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#070B18] text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Start your free trial today
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Save hours, boost conversion, unlock multilingual leads, and scale operations with Baynota.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center rounded-xl bg-cyan-400 hover:bg-cyan-300 text-indigo-950 font-semibold px-5 py-3">Create Account</a>
          <a href="#" className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium px-5 py-3">Schedule a Call</a>
        </div>
      </div>
    </section>
  )
}

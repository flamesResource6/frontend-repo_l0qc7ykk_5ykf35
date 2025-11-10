import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-indigo-950/60 backdrop-blur supports-[backdrop-filter]:bg-indigo-950/40 border border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500" />
              <span className="text-white font-semibold tracking-tight">Baynota</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-indigo-950 font-semibold px-4 py-2 transition-colors"
              >
                Get Started
              </a>
            </nav>

            <button
              className="md:hidden text-white"
              aria-label="Toggle navigation"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-white/90"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-indigo-950 font-semibold px-4 py-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

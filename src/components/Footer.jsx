export default function Footer() {
  return (
    <footer id="contact" className="bg-[#060A16] text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500" />
              <span className="text-white font-semibold tracking-tight">Baynota</span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">AI‑powered lead generation and intelligent form‑filling for modern teams.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Baynota. All rights reserved.</p>
          <p>Powered by Baynota</p>
        </div>
      </div>
    </footer>
  )
}

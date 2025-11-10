import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0B1020]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ProblemSolution />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

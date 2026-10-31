// src/App.jsx — Full portfolio page assembly
import Navbar        from './components/Navbar.jsx'
import Footer        from './components/Footer.jsx'
import Hero          from './sections/Hero.jsx'
import SelectedWork  from './sections/SelectedWork.jsx'
import Stack         from './sections/Stack.jsx'
import Services      from './sections/Services.jsx'
import About         from './sections/About.jsx'
import Achievements  from './sections/Achievements.jsx'
import Testimonials  from './sections/Testimonials.jsx'
import Contact       from './sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-[#0c0e12] text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Stack />
        <Services />
        <About />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

// src/App.jsx — Full portfolio page assembly
import { MotionConfig } from 'framer-motion'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import Navbar        from './components/Navbar.jsx'
import Footer        from './components/Footer.jsx'
import CosmicBackground from './components/cosmic/CosmicBackground.jsx'
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
    <div className="app-shell min-h-dvh text-slate-50">
      <CosmicBackground />
      <div className="app-content">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <BackgroundMusic />
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
        </MotionConfig>
      </div>
    </div>
  )
}

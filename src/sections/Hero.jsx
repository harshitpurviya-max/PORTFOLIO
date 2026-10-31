import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, MapPin, MessageCircle } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData.js'
import './Hero.css'

const whatsappUrl = socialLinks.find(({ label }) => label === 'WhatsApp').href

const reveal = (delay, reducedMotion) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: reducedMotion ? 0 : 0.75,
    ease: 'easeOut',
    delay: reducedMotion ? 0 : delay,
  },
})

export default function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="hero-scene relative flex min-h-dvh items-center overflow-hidden px-5 pb-20 pt-32 md:px-10"
    >
      <img
        className="hero-scene__image"
        src="/assets/backgrounds/hero-blackhole.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scene__shadows" aria-hidden="true" />

      <div className="hero-scene__content relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            {...reveal(0, reducedMotion)}
            className="hero-scene__availability mb-8 flex items-center gap-3"
          >
            <span className="hero-scene__status-mark" aria-hidden="true" />
            <span>{personalInfo.availabilityStatus}</span>
          </motion.div>

          <motion.div
            {...reveal(0.08, reducedMotion)}
            className="hero-scene__identity mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="hero-scene__monogram">{personalInfo.monogram}</span>
            <span className="hero-scene__separator" aria-hidden="true" />
            <span>{personalInfo.role}</span>
          </motion.div>

          <motion.h1
            {...reveal(0.16, reducedMotion)}
            className="hero-scene__title mb-7 text-5xl font-medium leading-[1.04] tracking-tight text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Hi, I&apos;m {personalInfo.name.split(' ')[0]}.
            <br />
            <span>I build for the web.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.24, reducedMotion)}
            className="hero-scene__introduction mb-7 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            {...reveal(0.32, reducedMotion)}
            className="hero-scene__location mb-9 flex items-center gap-2 text-sm"
          >
            <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />
            <span>Based in {personalInfo.location}</span>
          </motion.div>

          <motion.div
            {...reveal(0.4, reducedMotion)}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="hero-scene__primary-action group inline-flex items-center gap-3 rounded-sm px-5 py-3 text-sm font-semibold transition-colors"
            >
              Explore Selected Work
              <ArrowDownRight
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-scene__secondary-action inline-flex items-center gap-3 rounded-sm px-5 py-3 text-sm font-medium transition-colors"
            >
              <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

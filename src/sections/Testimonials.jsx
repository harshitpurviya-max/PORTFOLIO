// src/sections/Testimonials.jsx
import { motion } from 'framer-motion'
import SectionHeader   from '../components/SectionHeader.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import testimonials    from '../data/testimonials.js'

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <SectionHeader
            badge="Endorsements"
            title="Kind Words from People I've Built With"
            description="Authentic feedback from teammates and clients across hackathon challenges and custom web deliveries."
          />
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={card} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


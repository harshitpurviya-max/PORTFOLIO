// src/sections/Services.jsx
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import services      from '../data/services.js'

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
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
            badge="What I Do"
            title="Focused Web Services"
            description="Specialized frontend solutions built to help businesses establish authority and turn site visitors into clients."
          />
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={card}
              className="group flex flex-col gap-5 rounded-2xl border border-[#232936] bg-[#141820] p-6 transition-all duration-300 hover:border-[#8B5CF6]/50 md:p-8"
            >
              {/* Numeric indicator */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-3xl font-black text-[#232936] transition-colors duration-300 group-hover:text-[#8B5CF6]/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[#232936] transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-snug text-slate-50">
                {service.title}
              </h3>

              {/* Accent rule */}
              <div className="h-px w-8 bg-[#8B5CF6]/40 transition-all duration-300 group-hover:w-full group-hover:bg-[#8B5CF6]/20" />

              {/* Description */}
              <p className="flex-1 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


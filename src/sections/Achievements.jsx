// src/sections/Achievements.jsx
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import achievements from '../data/achievements.js'

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

/* Alternate left-border accent colours */
const ACCENTS = ['#8B5CF6', '#CCFF00']

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
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
            badge="Milestones"
            title="Key Achievements"
            description="Recognitions and technical milestones achieved through collaborative problem solving and deployment."
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-2"
        >
          {achievements.map((achievement, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length]
            return (
              <motion.div
                key={achievement.id}
                variants={card}
                className="group relative overflow-hidden rounded-2xl border border-[#232936] bg-[#141820] p-7 transition-all duration-300 hover:border-[#232936]/60"
                style={{ borderLeftColor: accent, borderLeftWidth: '3px' }}
              >
                {/* Subtle accent glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-6 top-0 h-full w-16 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
                  style={{ background: accent }}
                />

                {/* Award icon */}
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                >
                  <Award size={18} style={{ color: accent }} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-lg font-bold text-slate-50">
                  {achievement.title}
                </h3>

                {/* Role tag */}
                <span
                  className="mb-4 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {achievement.role}
                </span>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


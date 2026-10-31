// src/sections/Stack.jsx
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import StackBadge    from '../components/StackBadge.jsx'
import stack         from '../data/stack.js'

/* Category accent colours — visual variety without breaking the palette */
const CATEGORY_ACCENTS = {
  'Frontend Development':  { dot: '#8B5CF6', border: '#8B5CF6' },
  'Tooling & Environment': { dot: '#CCFF00', border: '#CCFF00' },
  'Deployment':            { dot: '#34D399', border: '#34D399' },
  'Design & Prototyping':  { dot: '#F472B6', border: '#F472B6' },
  'AI-Assisted Workflow':  { dot: '#60A5FA', border: '#60A5FA' },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Stack() {
  return (
    <section id="stack" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
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
            badge="Technologies & Tools"
            title="My Tech Stack"
            description="A focused matrix of modern tools, libraries, and workflows I use to build responsive, performant web applications."
          />
        </motion.div>

        {/* Category card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stack.map(({ category, items }) => {
            const accent = CATEGORY_ACCENTS[category] ?? { dot: '#8B5CF6', border: '#8B5CF6' }

            return (
              <motion.div
                key={category}
                variants={cardItem}
                className="group rounded-2xl border border-[#232936] bg-[#141820] p-6 transition-all duration-300 hover:border-[#232936]/80"
                style={{
                  '--accent': accent.border,
                }}
              >
                {/* Category header */}
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: accent.dot }}
                  />
                  <h3 className="text-sm font-bold text-slate-100">{category}</h3>
                  <span className="ml-auto rounded-full border border-[#232936] px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {items.length}
                  </span>
                </div>

                {/* Thin accent rule */}
                <div
                  className="mb-4 h-px w-full opacity-30"
                  style={{ backgroundColor: accent.dot }}
                />

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {items.map((name) => (
                    <StackBadge key={name} name={name} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


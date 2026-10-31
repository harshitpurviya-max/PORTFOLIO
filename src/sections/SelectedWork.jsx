// src/sections/SelectedWork.jsx
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectCard   from '../components/ProjectCard.jsx'
import projects      from '../data/projects.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function SelectedWork() {
  return (
    <section id="work" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
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
            badge="Portfolio"
            title="Selected Work"
            description="Real web platforms and interactive digital experiences engineered and deployed to production."
          />
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


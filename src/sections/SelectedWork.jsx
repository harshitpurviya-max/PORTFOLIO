import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData.js'
import ProjectCard from '../components/ProjectCard.jsx'
import './SelectedWork.css'

export default function SelectedWork() {
  return (
    <section id="work" className="selected-work px-5 py-20 md:px-10 md:py-28">
      <div className="selected-work__inner mx-auto max-w-7xl">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="selected-work__header"
        >
          <p className="selected-work__eyebrow">
            <span aria-hidden="true" />
            SELECTED MISSIONS
          </p>
          <div className="selected-work__heading">
            <h2>Stories brought to life.</h2>
            <p>
              A pair of distinct journeys: one shaped around a real-world
              procurement challenge, the other around a shared celebration.
            </p>
          </div>
        </motion.header>

        <div className="selected-work__projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

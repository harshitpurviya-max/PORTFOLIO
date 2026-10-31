import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData.js'
import StackBadge from '../components/StackBadge.jsx'
import './Stack.css'

const categoryVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function Stack() {
  return (
    <section id="stack" className="stack-section px-5 py-20 md:px-10 md:py-28">
      <div className="stack-section__inner mx-auto max-w-7xl">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="stack-section__header"
        >
          <p className="stack-section__eyebrow">
            <span aria-hidden="true" />
            MISSION EQUIPMENT
          </p>
          <div className="stack-section__title-row">
            <h2>Tools for the work.</h2>
            <p>
              The technologies and creative tools I use to shape and build digital
              experiences.
            </p>
          </div>
        </motion.header>

        <div className="stack-section__grid">
          {skills.map(({ category, items }, index) => (
            <motion.article
              key={category}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                ...categoryVariants,
                visible: {
                  ...categoryVariants.visible,
                  transition: {
                    ...categoryVariants.visible.transition,
                    delay: (index % 3) * 0.07,
                  },
                },
              }}
              className={`stack-section__category stack-section__category--${index + 1}`}
            >
              <div className="stack-section__category-heading">
                <span className="stack-section__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{category}</h3>
              </div>

              <ul className="stack-section__items">
                {items.map((name) => (
                  <li key={name}>
                    <StackBadge name={name} />
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

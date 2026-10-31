import { motion } from 'framer-motion'
import { services } from '../data/portfolioData.js'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services-section px-5 py-20 md:px-10 md:py-28">
      <div className="services-section__inner mx-auto max-w-7xl">
        <div className="services-section__layout">
          <motion.header
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="services-section__intro"
          >
            <p className="services-section__eyebrow">
              <span aria-hidden="true" />
              CAPABILITIES / 04
            </p>
            <h2>What I can build.</h2>
            <p className="services-section__lead">
              Thoughtful digital experiences, built around the needs of the people
              who use them.
            </p>
            <div className="services-section__instrument" aria-hidden="true">
              <span className="services-section__instrument-orbit" />
              <span className="services-section__instrument-core" />
              <span className="services-section__instrument-crosshair" />
              <span className="services-section__instrument-label">HP / WEB</span>
            </div>
          </motion.header>

          <ol className="services-section__list">
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
                className="services-section__item"
              >
                <span className="services-section__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="services-section__item-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="services-section__marker" aria-hidden="true" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

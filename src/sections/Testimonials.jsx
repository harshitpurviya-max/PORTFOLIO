import { motion } from 'framer-motion'
import { testimonials } from '../data/portfolioData.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials-section px-5 py-20 md:px-10 md:py-28"
    >
      <div className="testimonials-section__inner mx-auto max-w-7xl">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="testimonials-section__header"
        >
          <p className="testimonials-section__eyebrow">
            <span aria-hidden="true" />
            CREW TRANSMISSIONS / 03
          </p>
          <div className="testimonials-section__heading">
            <h2>In their own words.</h2>
            <p>
              Reflections from people who shared the work, the process, and the
              projects along the way.
            </p>
          </div>
        </motion.header>

        <div className="testimonials-section__list">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              className={`testimonial-voice testimonial-voice--${index + 1}`}
            >
              <span className="testimonial-voice__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="testimonial-voice__statement">
                <span className="testimonial-voice__quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{testimonial.quote}</blockquote>
              </div>

              <footer className="testimonial-voice__attribution">
                <cite>{testimonial.name}</cite>
                <span>{testimonial.relation}</span>
                <span className="testimonial-voice__project">
                  Project: {testimonial.project}
                </span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

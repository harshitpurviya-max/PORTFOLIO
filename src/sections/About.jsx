import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData.js'
import './About.css'

const TAGS = [
  'Editorial & Creative Web',
  'Responsive by Default',
  'AI-Augmented Execution',
]

const PROCESS_STAGES = [
  {
    number: '01',
    title: 'Understand the idea',
    description:
      'Get clear on the purpose, audience, and what the website needs to achieve.',
  },
  {
    number: '02',
    title: 'Shape the experience',
    description:
      'Explore layouts, visual direction, and interactions that make the website engaging.',
  },
  {
    number: '03',
    title: 'Build and refine',
    description:
      'Turn the concept into a responsive website, test it, and improve the details.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <section id="about" className="about-section px-5 py-20 md:px-10 md:py-28">
      <div className="about-section__inner mx-auto max-w-7xl">
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          className="about-section__opening"
        >
          <p className="about-section__eyebrow">
            <span aria-hidden="true" />
            ABOUT THE BUILDER
          </p>

          <div className="about-section__intro">
            <div className="about-section__identity">
              <p className="about-section__location">
                {personalInfo.role} <span aria-hidden="true">/</span>{' '}
                {personalInfo.location}
              </p>
              <h2 className="about-section__name">
                {personalInfo.name}
                <span aria-hidden="true">.</span>
              </h2>
            </div>

            <div className="about-section__story">
              <p className="about-section__headline">{personalInfo.headline}</p>
              <p className="about-section__copy">{personalInfo.bio}</p>
              <p className="about-section__copy">
                I like taking a rough idea and shaping it into a website that feels
                intuitive, looks great, and serves a real purpose. I work on everything
                from business websites and landing pages to interactive web experiences.
                I enjoy experimenting with new tools, exploring creative designs, and
                finding better ways to bring ideas to life.
              </p>
              <p className="about-section__copy">
                I also make use of AI-assisted development tools to speed up my workflow,
                explore possibilities, and turn concepts into working projects.
              </p>

              <ul className="about-section__tags" aria-label="Areas of focus">
                {TAGS.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="about-section__process">
          <div className="about-section__process-heading">
            <p className="about-section__eyebrow">HOW I WORK</p>
            <h3>From first thought to finished experience.</h3>
          </div>

          <div className="about-section__stages">
            {PROCESS_STAGES.map(({ number, title, description }, index) => (
              <motion.article
                key={number}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  ...reveal,
                  visible: {
                    ...reveal.visible,
                    transition: {
                      ...reveal.visible.transition,
                      delay: index * 0.08,
                    },
                  },
                }}
                className="about-section__stage"
              >
                <span className="about-section__stage-number">{number}</span>
                <h4>{title}</h4>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { achievements } from '../data/portfolioData.js'
import './Achievements.css'

export default function Achievements() {
  const [sihAchievement, deploymentAchievement] = achievements

  return (
    <section
      id="achievements"
      className="achievements-section px-5 py-20 md:px-10 md:py-28"
    >
      <div className="achievements-section__inner mx-auto max-w-7xl">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="achievements-section__header"
        >
          <p className="achievements-section__eyebrow">
            <span aria-hidden="true" />
            FLIGHT RECORD / RECOGNITION
          </p>
          <div className="achievements-section__heading">
            <h2>Milestones along the way.</h2>
            <p>
              A record of collaborative work, selection, and projects brought
              into the world.
            </p>
          </div>
        </motion.header>

        <div className="achievements-section__records">
          <motion.article
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            className="achievement-record achievement-record--featured"
          >
            <div className="achievement-record__index">
              <span>01</span>
              <span className="achievement-record__rule" aria-hidden="true" />
              <span className="achievement-record__index-label">SIH</span>
            </div>

            <div className="achievement-record__main">
              <p className="achievement-record__eyebrow">
                SMART INDIA HACKATHON / INTERNAL ROUND
              </p>
              <h3>{sihAchievement.title}</h3>
              <p className="achievement-record__recognition">
                {sihAchievement.recognition}
              </p>

              <dl className="achievement-record__credits">
                <div>
                  <dt>Role</dt>
                  <dd>{sihAchievement.role}</dd>
                </div>
                <div>
                  <dt>Team</dt>
                  <dd>{sihAchievement.team}</dd>
                </div>
              </dl>
            </div>

            <div className="achievement-record__signal" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </motion.article>

          <motion.article
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            className="achievement-record achievement-record--deployment"
          >
            <div className="achievement-record__index">
              <span>02</span>
              <span className="achievement-record__rule" aria-hidden="true" />
              <span className="achievement-record__index-label">LIVE</span>
            </div>

            <div className="achievement-record__main">
              <p className="achievement-record__eyebrow">
                BUILD / DEPLOY / SHARE
              </p>
              <h3>{deploymentAchievement.title}</h3>
              <p className="achievement-record__recognition">
                {deploymentAchievement.recognition}
              </p>
              <ul
                className="achievement-record__projects"
                aria-label="Deployed projects"
              >
                {deploymentAchievement.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

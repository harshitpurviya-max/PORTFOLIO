import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const PROJECT_SCENES = {
  'kisan-setu': '/assets/backgrounds/earth-horizon.jpg',
  'royal-rajasthani-wedding': '/assets/backgrounds/galaxy-ngc2336.jpg',
}

export default function ProjectCard({ project, index }) {
  const { title, category, team, role, overview, keyFeatures, liveUrl } = project
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      className={`project-story project-story--${project.id}`}
    >
      <div className="project-story__artwork">
        <img
          src={PROJECT_SCENES[project.id]}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="project-story__image-shade" aria-hidden="true" />
        <span className="project-story__frame-label">
          MISSION / {projectNumber}
        </span>
        <span className="project-story__frame-index" aria-hidden="true">
          {projectNumber}
        </span>
      </div>

      <div className="project-story__content">
        <p className="project-story__category">{category}</p>
        <h3>{title}</h3>
        <p className="project-story__description">{overview}</p>

        <dl className="project-story__credits">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          {team && (
            <div>
              <dt>Team</dt>
              <dd>{team}</dd>
            </div>
          )}
        </dl>

        <ul className="project-story__features" aria-label={`${title} features`}>
          {keyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <a
          className="project-story__link"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} live website (opens in a new tab)`}
        >
          Visit live website
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

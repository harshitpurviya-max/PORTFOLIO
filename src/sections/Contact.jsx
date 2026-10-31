import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Link2, MapPin, MessageCircle } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData.js'
import './Contact.css'

const socialIcons = {
  GitHub: GitBranch,
  LinkedIn: Link2,
  WhatsApp: MessageCircle,
}

const profileLinks = socialLinks.filter(({ label }) => label !== 'Email')

export default function Contact() {
  return (
    <section id="contact" className="contact-section px-5 py-20 md:px-10 md:py-28">
      <img
        className="contact-section__horizon"
        src="/assets/backgrounds/earth-horizon.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="contact-section__atmosphere" aria-hidden="true" />
      <div className="contact-section__orbit" aria-hidden="true" />

      <div className="contact-section__inner relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="contact-section__content"
        >
          <p className="contact-section__eyebrow">
            <span aria-hidden="true" />
            FINAL TRANSMISSION / OPEN CHANNEL
          </p>

          <h2>
            Every great journey
            <br className="hidden sm:block" /> begins with a conversation.
          </h2>

          <p className="contact-section__invitation">
            Have a project in mind, or just want to talk through an idea? I’d be
            glad to hear from you.
          </p>

          <a
            className="contact-section__email"
            href={`mailto:${personalInfo.email}`}
          >
            <span>{personalInfo.email}</span>
            <ArrowUpRight size={19} strokeWidth={1.7} aria-hidden="true" />
            <span className="sr-only">Send email</span>
          </a>
        </motion.div>

        <div className="contact-section__footer">
          <div className="contact-section__details">
            <p className="contact-section__availability">
              <span aria-hidden="true" />
              {personalInfo.availabilityStatus}
            </p>
            <p className="contact-section__location">
              <MapPin size={14} strokeWidth={1.7} aria-hidden="true" />
              {personalInfo.location}
            </p>
          </div>

          <nav className="contact-section__profiles" aria-label="Contact and social profiles">
            {profileLinks.map(({ label, href }) => {
              const Icon = socialIcons[label]

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                >
                  {Icon && <Icon size={15} strokeWidth={1.7} aria-hidden="true" />}
                  <span>{label}</span>
                  <ArrowUpRight size={12} strokeWidth={1.7} aria-hidden="true" />
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </section>
  )
}

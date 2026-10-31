// src/components/Footer.jsx
import { GitBranch, Link2, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const SOCIAL = [
  {
    label:   'GitHub',
    href:    'https://github.com/harshitpurviya-max',
    icon:    GitBranch,
    rel:     'noopener noreferrer',
    target:  '_blank',
  },
  {
    label:   'LinkedIn',
    href:    'https://www.linkedin.com/in/harshit-purviya-36a691346/',
    icon:    Link2,
    rel:     'noopener noreferrer',
    target:  '_blank',
  },
  {
    label:   'Email',
    href:    'mailto:harshitpurviya@gmail.com',
    icon:    Mail,
    rel:     undefined,
    target:  undefined,
  },
  {
    label:   'WhatsApp',
    href:    'https://wa.me/919238621518',
    icon:    MessageCircle,
    rel:     'noopener noreferrer',
    target:  '_blank',
  },
]

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#232936] bg-[#0c0e12]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center md:px-10">

        {/* Monogram */}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-xl font-black tracking-wider text-slate-100 transition-colors hover:text-[#CCFF00]"
        >
          H/P.
        </a>

        {/* Tagline */}
        <p className="text-xs text-slate-600">
          Handcrafted in Bhopal, India
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL.map(({ label, href, icon: Icon, rel, target }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232936] text-slate-500 transition-all hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6] hover:scale-[1.05]"
            >
              <Icon size={16} strokeWidth={1.8} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-[#232936]" />

        {/* Copyright + Back to top */}
        <div className="flex w-full items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Harshit Purviya. All rights reserved.
          </p>
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-[#CCFF00]"
          >
            <ArrowUp size={13} strokeWidth={2.5} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

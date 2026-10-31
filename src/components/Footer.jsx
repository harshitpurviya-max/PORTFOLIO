// src/components/Footer.jsx
import { GitBranch, Link2, Mail, MessageCircle, ArrowUp } from 'lucide-react'
import { socialLinks } from '../data/portfolioData.js'

const SOCIAL_ICONS = {
  GitHub: GitBranch,
  LinkedIn: Link2,
  Email: Mail,
  WhatsApp: MessageCircle,
}

export default function Footer() {
  return (
    <footer className="border-t border-[#263548] bg-[#070A12]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center md:px-10">

        {/* Monogram */}
        <a
          href="#hero"
          className="text-xl font-black tracking-wider text-slate-100 transition-colors hover:text-[#D8B47A]"
        >
          H/P.
        </a>

        {/* Tagline */}
        <p className="text-xs text-[#8491A5]">
          Handcrafted in Bhopal, India
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label]
            const isExternal = href.startsWith('https://')

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#263548] text-[#8491A5] transition-all hover:border-[#83B8DB]/50 hover:text-[#83B8DB] hover:scale-[1.05]"
              >
                <Icon size={16} strokeWidth={1.8} />
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-[#263548]" />

        {/* Copyright + Back to top */}
        <div className="flex w-full items-center justify-between gap-4">
          <p className="text-xs text-[#8491A5]">
            &copy; {new Date().getFullYear()} Harshit Purviya. All rights reserved.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-xs text-[#8491A5] transition-colors hover:text-[#D8B47A]"
          >
            <ArrowUp size={13} strokeWidth={2.5} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

// src/sections/Contact.jsx
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Link2, GitBranch, ArrowUpRight, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import personal      from '../data/personal.js'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <SectionHeader
            badge="Get In Touch"
            title="Have an idea? Let's build something together."
            description="I'm available for freelance web development, landing pages, and business websites. Let's discuss your project."
          />
        </motion.div>

        {/* Action cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* ① WhatsApp — Primary ─────────────────────────────────── */}
          <motion.a
            {...fadeUp(0.08)}
            href={personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-full flex flex-col gap-5 rounded-2xl border border-[#CCFF00]/30 bg-[#141820] p-7 transition-all duration-300 hover:border-[#CCFF00]/60 hover:bg-[#CCFF00]/5 sm:col-span-2"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#CCFF00]/30 bg-[#CCFF00]/10">
                <MessageCircle size={22} className="text-[#CCFF00]" strokeWidth={1.8} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-[#232936] transition-all duration-300 group-hover:text-[#CCFF00] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </div>

            <div>
              <h3 className="mb-1 text-lg font-bold text-slate-50">
                Direct WhatsApp Chat
              </h3>
              <p className="text-sm text-slate-400">
                Fastest way to reach me. Drop a message and let&apos;s talk about your project
                directly.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#CCFF00] px-4 py-2.5 text-sm font-bold text-[#0c0e12] transition-all duration-200 group-hover:scale-[1.02]">
              <MessageCircle size={14} strokeWidth={2.5} />
              Open WhatsApp
            </span>
          </motion.a>

          {/* ② Email ─────────────────────────────────────────────── */}
          <motion.a
            {...fadeUp(0.13)}
            href={`mailto:${personal.email}`}
            className="group flex flex-col gap-5 rounded-2xl border border-[#232936] bg-[#141820] p-7 transition-all duration-300 hover:border-[#8B5CF6]/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B5CF6]/25 bg-[#8B5CF6]/10">
                <Mail size={22} className="text-[#8B5CF6]" strokeWidth={1.8} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-[#232936] transition-all duration-300 group-hover:text-[#8B5CF6] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </div>

            <div>
              <h3 className="mb-1 text-base font-bold text-slate-50">Email Me</h3>
              <p className="break-all text-xs text-slate-400">{personal.email}</p>
            </div>

            <span className="mt-auto text-xs font-semibold text-[#8B5CF6]">
              Send an Email →
            </span>
          </motion.a>

          {/* ③ Profiles ──────────────────────────────────────────── */}
          <motion.div
            {...fadeUp(0.18)}
            className="flex flex-col gap-5 rounded-2xl border border-[#232936] bg-[#141820] p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#232936] bg-[#0c0e12]">
              <Link2 size={20} className="text-slate-400" strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="mb-1 text-base font-bold text-slate-50">My Profiles</h3>
              <p className="text-xs text-slate-500">Find me on the platforms I use most.</p>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[#232936] bg-[#0c0e12] px-3 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6]"
              >
                <span className="flex items-center gap-2">
                  <GitBranch size={13} strokeWidth={2} />
                  GitHub
                </span>
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[#232936] bg-[#0c0e12] px-3 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6]"
              >
                <span className="flex items-center gap-2">
                  <Link2 size={13} strokeWidth={2} />
                  LinkedIn
                </span>
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Location badge */}
        <motion.div
          {...fadeUp(0.22)}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500"
        >
          <MapPin size={14} className="text-[#CCFF00]" strokeWidth={2} />
          <span>Based in {personal.location}</span>
          <span className="text-[#232936]">•</span>
          <span>Open for remote work globally</span>
        </motion.div>

      </div>
    </section>
  )
}


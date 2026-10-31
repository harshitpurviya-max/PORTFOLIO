// src/sections/About.jsx
import { motion } from 'framer-motion'
import { Compass, Palette, Code2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

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
    icon: Compass,
  },
  {
    number: '02',
    title: 'Shape the experience',
    description:
      'Explore layouts, visual direction, and interactions that make the website engaging.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Build and refine',
    description:
      'Turn the concept into a responsive website, test it, and improve the details.',
    icon: Code2,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="bg-[#0c0e12] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <SectionHeader
            badge="ABOUT ME"
            title="A little about the person behind the pixels."
            description="I enjoy crafting thoughtful, responsive web experiences that bring ideas to life."
          />
        </motion.div>

        {/* Two-column editorial layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT — Narrative ──────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-5"
          >
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-slate-400">
              I&apos;m Harshit, a web developer who enjoys turning ideas into meaningful digital
              experiences. I like taking a rough idea and shaping it into a website that feels
              intuitive, looks great, and serves a real purpose.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-slate-400">
              I work on everything from business websites and landing pages to interactive web
              experiences. I enjoy experimenting with new tools, exploring creative designs, and
              finding better ways to bring ideas to life.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-slate-400">
              I also make use of AI-assisted development tools to speed up my workflow, explore
              possibilities, and turn concepts into working projects.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
              {TAGS.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-[#232936] bg-[#141820] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Process card ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-[#232936] bg-[#141820] p-6 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-10 blur-3xl"
                style={{ background: '#8B5CF6' }}
              />

              <h3 className="relative text-xl font-bold tracking-tight text-slate-50">
                How I bring ideas to life.
              </h3>

              <div className="relative mt-7 space-y-6">
                {PROCESS_STAGES.map(({ number, title, description, icon: Icon }) => (
                  <motion.div
                    key={number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    className="flex gap-4"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 text-[#CCFF00]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <span className="mt-2 font-mono text-[10px] font-semibold tracking-wider text-slate-600">
                        {number}
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-semibold text-slate-100">{title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-7 border-t border-[#232936] pt-5">
                <p className="text-sm font-medium tracking-wide text-slate-400">
                  Always building. Always learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

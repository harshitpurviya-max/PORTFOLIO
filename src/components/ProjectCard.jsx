// src/components/ProjectCard.jsx
import { ExternalLink, GitBranch, CheckCircle2 } from 'lucide-react'

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    team,
    role,
    overview,
    keyFeatures,
    languageBreakdown,
    liveUrl,
    githubUrl,
  } = project

  return (
    <article className="group rounded-2xl border border-[#232936] bg-[#141820] p-6 transition-all duration-300 hover:border-[#8B5CF6]/50 md:p-8">

      {/* ── Top meta row ────────────────────────────────── */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {/* Category */}
        <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-0.5 text-xs font-semibold text-[#8B5CF6]">
          {category}
        </span>
        {/* Team */}
        <span className="rounded-full border border-[#232936] bg-[#0c0e12] px-3 py-0.5 text-xs text-slate-400">
          {team}
        </span>
        {/* Role */}
        <span className="ml-auto text-xs text-slate-500 italic">{role}</span>
      </div>

      {/* ── Title + Overview ─────────────────────────────── */}
      <h3 className="mb-3 text-2xl font-bold text-slate-50">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-400">{overview}</p>

      {/* ── Key Highlights ───────────────────────────────── */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Key Highlights
        </p>
        <ul className="space-y-2">
          {keyFeatures.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-[#CCFF00]"
                strokeWidth={2.5}
              />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Language Breakdown Bar ───────────────────────── */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Language Breakdown
        </p>

        {/* Segmented bar */}
        <div className="flex h-2 w-full overflow-hidden rounded-full">
          {languageBreakdown.map((lang) => (
            <div
              key={lang.name}
              style={{
                width: lang.percentage,
                backgroundColor: lang.color,
              }}
              title={`${lang.name}: ${lang.percentage}`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
          {languageBreakdown.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-xs text-slate-400">
                {lang.name}{' '}
                <span className="text-slate-500">{lang.percentage}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Action Row ───────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 border-t border-[#232936] pt-5">
        {/* Primary CTA */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#7C3AED] hover:scale-[1.02]"
        >
          <ExternalLink size={14} strokeWidth={2.5} />
          Live Preview / Demo
        </a>

        {/* Secondary CTA */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-[#232936] bg-[#0c0e12] px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6] hover:scale-[1.02]"
        >
          <GitBranch size={14} strokeWidth={2} />
          Source Code
        </a>
      </div>
    </article>
  )
}

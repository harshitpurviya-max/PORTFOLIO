// src/components/TestimonialCard.jsx
import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  const { name, relation, project, quote } = testimonial

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#232936] bg-[#141820] p-6 md:p-8">

      {/* Quote watermark */}
      <Quote
        size={64}
        className="absolute right-4 top-4 text-[#232936] opacity-60 rotate-180"
        strokeWidth={1}
      />

      {/* Quotation */}
      <blockquote className="relative z-10 mb-6 flex-1 text-sm leading-relaxed italic text-slate-300 md:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author footer */}
      <footer className="flex flex-col gap-1 border-t border-[#232936] pt-4">
        <span className="font-semibold text-slate-100">{name}</span>
        <span className="text-xs text-violet-400">{relation}</span>
        <span className="text-xs text-slate-500">Re: {project}</span>
      </footer>
    </div>
  )
}


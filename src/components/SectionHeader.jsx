// src/components/SectionHeader.jsx

export default function SectionHeader({ badge, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Badge pill */}
      {badge && (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CCFF00]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}


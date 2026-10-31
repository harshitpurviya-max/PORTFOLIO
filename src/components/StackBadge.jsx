// src/components/StackBadge.jsx

export default function StackBadge({ name }) {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-xl border border-[#232936] bg-[#1a202c]/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:scale-[1.02] hover:border-[#CCFF00] hover:text-[#CCFF00]">
      <span className="h-1 w-1 rounded-full bg-current opacity-60" />
      {name}
    </div>
  )
}


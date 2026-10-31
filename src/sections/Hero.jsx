// src/sections/Hero.jsx
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDownRight, MessageCircle, Sparkles, MapPin } from 'lucide-react'
import personal from '../data/personal.js'

/* ─────────────────────────────────────────────────────────────────────
   STARFIELD — generated once, stable across renders
───────────────────────────────────────────────────────────────────── */
const STAR_COUNT = 80
const SPARKLE_COUNT = 8

function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function generateStars() {
  const rand = seededRand(42)
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 2 + 1.5,
    opacity: rand() * 0.45 + 0.5,
    dur: rand() * 3 + 2,
    delay: rand() * 4,
    color: rand() < 0.12 ? '#CCFF00' : '#FFFFFF',
    sparkle: false,
  }))

  const sparkles = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
    id: STAR_COUNT + i,
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 4 + 12,
    opacity: rand() * 0.45 + 0.5,
    dur: rand() * 3 + 2,
    delay: rand() * 4,
    color: rand() < 0.25 ? '#CCFF00' : '#FFFFFF',
    sparkle: true,
  }))

  return [...stars, ...sparkles]
}

const STARS = generateStars()

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/* ─────────────────────────────────────────────────────────────────────
   FADE-UP HELPER
───────────────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

/* ═══════════════════════════════════════════════════════════════════
   STARFIELD
═══════════════════════════════════════════════════════════════════ */
function SparklingStar({ star, pointerX, pointerY }) {
  const brightness = useTransform(() => {
    const distance = Math.hypot(pointerX.get() - star.x, pointerY.get() - star.y)
    const proximity = Math.max(0, 1 - distance / 18)
    return `brightness(${1 + proximity * 0.5})`
  })

  const offsetX = useTransform(() => {
    const dx = star.x - pointerX.get()
    const dy = star.y - pointerY.get()
    const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 18)
    return clamp(dx * proximity * 0.12, -2, 2)
  })

  const offsetY = useTransform(() => {
    const dx = star.x - pointerX.get()
    const dy = star.y - pointerY.get()
    const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 18)
    return clamp(dy * proximity * 0.12, -2, 2)
  })

  return (
    <motion.span
      className={`absolute ${star.sparkle ? 'z-10' : ''}`}
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: star.sparkle ? 'auto' : star.size,
        height: star.sparkle ? 'auto' : star.size,
        x: offsetX,
        y: offsetY,
        filter: brightness,
      }}
    >
      <motion.span
        className={star.sparkle ? 'block leading-none' : 'block h-full w-full rounded-full'}
        style={{
          color: star.color,
          backgroundColor: star.sparkle ? 'transparent' : star.color,
          fontSize: star.sparkle ? star.size : undefined,
          textShadow: star.sparkle ? `0 0 6px ${star.color}CC` : undefined,
          boxShadow: !star.sparkle
            ? star.color === '#FFFFFF'
              ? '0 0 6px rgba(255,255,255,0.8)'
              : '0 0 6px rgba(204,255,0,0.65)'
            : undefined,
        }}
        animate={{
          opacity: [star.opacity, Math.max(0.5, star.opacity * 0.7), star.opacity],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: star.dur,
          delay: star.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {star.sparkle ? '✦' : null}
      </motion.span>
    </motion.span>
  )
}

function Starfield({ pointerX, pointerY }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {STARS.map((star) => (
        <SparklingStar key={star.id} star={star} pointerX={pointerX} pointerY={pointerY} />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const starPointerX = useMotionValue(-100)
  const starPointerY = useMotionValue(-100)

  const handleStarPointerMove = (event) => {
    if (event.pointerType === 'touch') {
      starPointerX.set(-100)
      starPointerY.set(-100)
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    starPointerX.set(((event.clientX - rect.left) / rect.width) * 100)
    starPointerY.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  const resetStarPointer = () => {
    starPointerX.set(-100)
    starPointerY.set(-100)
  }

  return (
    <section
      onPointerMove={handleStarPointerMove}
      onPointerLeave={resetStarPointer}
      className="relative min-h-dvh overflow-hidden bg-[#0c0e12] px-5 pt-28 pb-20 md:px-10"
    >
      {/* Starfield (z-10) */}
      <Starfield pointerX={starPointerX} pointerY={starPointerY} />

      {/* Subtle grid backdrop (z-0) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),' +
            'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
        }}
      />

      {/* Top-left violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 z-0 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: '#8B5CF6' }}
      />

      {/* Top-right lime glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-40 z-0 h-[400px] w-[400px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: '#CCFF00' }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
        {/* Status pill */}
        <motion.div
          {...fadeUp(0.05)}
          className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-emerald-400">
            {personal.availabilityStatus}
          </span>
        </motion.div>

        {/* Monogram + role row */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 text-sm font-black tracking-tight text-[#8B5CF6]">
            {personal.monogram}
          </span>
          <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1.5 text-sm font-medium text-slate-300">
            {personal.role}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl font-black leading-[1.08] tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m Harshit.
          <br />
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#CCFF00] bg-clip-text text-transparent">
            I build for the web.
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {personal.bio}
        </motion.p>

        {/* Location */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex items-center gap-2 text-sm text-slate-500"
        >
          <MapPin size={14} className="text-[#CCFF00]" strokeWidth={2} />
          Based in {personal.location}
          <Sparkles size={13} className="text-[#8B5CF6] opacity-70" strokeWidth={2} />
        </motion.div>

        {/* CTA row */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#7C3AED] hover:scale-[1.02]"
          >
            Explore Selected Work
            <ArrowDownRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>

          <a
            href={personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-[#CCFF00]/35 bg-[#CCFF00]/10 px-5 py-3 text-sm font-semibold text-[#CCFF00] transition-all hover:bg-[#CCFF00]/20 hover:scale-[1.02]"
          >
            <MessageCircle size={15} strokeWidth={2.5} />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work',         href: '#work'         },
  { label: 'Stack',        href: '#stack'         },
  { label: 'Services',     href: '#services'      },
  { label: 'About',        href: '#about'         },
  { label: 'Testimonials', href: '#testimonials'  },
  { label: 'Contact',      href: '#contact'       },
]

const WHATSAPP_URL = 'https://wa.me/919238621518'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Add a tiny drop-shadow when user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#232936] backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : ''
      }`}
      style={{ backgroundColor: 'rgba(12,14,18,0.85)' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">

        {/* ── Logo / Monogram ─────────────────────────── */}
        <a
          href="#"
          className="text-xl font-black tracking-wider text-slate-100 transition-colors hover:text-[#CCFF00]"
          onClick={closeMenu}
        >
          H/P.
        </a>

        {/* ── Desktop Nav Links ────────────────────────── */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-50"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right: CTA + Hamburger ───────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-[#CCFF00]/40 bg-[#CCFF00]/10 px-4 py-2 text-sm font-semibold text-[#CCFF00] transition-all hover:bg-[#CCFF00]/20 hover:scale-[1.02] md:flex"
          >
            <MessageCircle size={15} strokeWidth={2.5} />
            Let&apos;s Talk
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="flex items-center justify-center rounded-lg border border-[#232936] p-2 text-slate-400 transition-colors hover:border-[#8B5CF6]/50 hover:text-slate-100 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Slide-down Panel ──────────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[#232936] px-5 pb-5 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-[#141820] hover:text-slate-50"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#CCFF00]/40 bg-[#CCFF00]/10 py-3 text-sm font-semibold text-[#CCFF00] transition-all hover:bg-[#CCFF00]/20"
          >
            <MessageCircle size={15} strokeWidth={2.5} />
            Let&apos;s Talk on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}


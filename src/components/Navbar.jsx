import { useEffect, useMemo, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const ids = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-px flex h-[68px] items-center justify-between"
      >
        {/* Wordmark */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Sumit Yadav — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-amber p-[1.5px]">
            <span className="grid h-full w-full place-items-center rounded-[10px] bg-ink font-display text-sm font-bold text-foreground">
              SY
            </span>
          </span>
          <span className="font-display text-[0.98rem] font-semibold tracking-tight text-foreground">
            Sumit Yadav
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left rounded-full bg-gradient-to-r from-accent to-amber transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Resume + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-xl border border-line-strong bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.06] sm:inline-flex"
          >
            <FiDownload size={16} />
            Résumé
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-foreground transition-colors hover:border-accent/50 lg:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[540px] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-[0.95rem] transition-colors ${
                  active === link.id
                    ? 'bg-white/[0.05] text-foreground'
                    : 'text-muted hover:bg-white/[0.04] hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-ink"
            >
              <FiDownload size={16} />
              Download résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

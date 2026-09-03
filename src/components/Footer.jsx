import { FiArrowUp } from 'react-icons/fi'
import { site, navLinks } from '../data/site'
import SocialLinks from './ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-surface-raised/30">
      <div className="container-px py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-amber font-display text-sm font-bold text-ink">
                SY
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {site.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.summary}</p>
            <SocialLinks className="mt-5" />
          </div>

          <nav aria-label="Footer" className="lg:pt-2">
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="link-muted text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-faint">
            © {year} {site.name} · Built with React, Vite &amp; Tailwind CSS
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            <FiArrowUp size={13} aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

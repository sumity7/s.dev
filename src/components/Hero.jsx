import { FiChevronDown, FiDownload, FiFolder, FiMail, FiMapPin } from 'react-icons/fi'
import { site } from '../data/site'
import Button from './ui/Button'
import SocialLinks from './ui/SocialLinks'
import CodeWindow from './CodeWindow'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      {/* Ambient background */}
      <div className="aurora" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Intro */}
          <div>
            {site.available && (
              <div
                className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted"
                style={{ animationDelay: '60ms' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Seeking entry-level IT &amp; software development roles
              </div>
            )}

            <h1
              className="hero-rise mt-6 font-display text-[2.65rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl"
              style={{ animationDelay: '120ms' }}
            >
              Sumit Yadav
            </h1>

            <p
              className="hero-rise mt-3 font-display text-[1.65rem] font-semibold leading-tight sm:text-[2.1rem]"
              style={{ animationDelay: '190ms' }}
            >
              <span className="bg-gradient-to-r from-accent via-accent-soft to-amber bg-clip-text text-transparent">
                MERN Full Stack Developer
              </span>
            </p>
            <p
              className="hero-rise mt-1.5 font-mono text-sm text-faint sm:text-base"
              style={{ animationDelay: '250ms' }}
            >
              {site.tagline}
            </p>

            <p
              className="hero-rise mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted"
              style={{ animationDelay: '320ms' }}
            >
              {site.summary}
            </p>

            <p
              className="hero-rise mt-5 max-w-xl border-l-2 border-accent/50 pl-4 text-[0.95rem] leading-relaxed text-faint"
              style={{ animationDelay: '355ms' }}
            >
              {site.careerGoal}
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '390ms' }}
            >
              <Button href="#projects" variant="primary" size="lg">
                <FiFolder size={18} />
                View projects
              </Button>
              <Button
                href={site.resume}
                target="_blank"
                rel="noreferrer noopener"
                download
                variant="secondary"
                size="lg"
              >
                <FiDownload size={18} />
                Download résumé
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                <FiMail size={18} />
                Contact me
              </Button>
            </div>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '460ms' }}
            >
              <SocialLinks />
              <span className="hidden h-5 w-px bg-line sm:block" />
              <span className="flex items-center gap-1.5 text-sm text-faint">
                <FiMapPin size={14} />
                Lucknow, India
              </span>
            </div>
          </div>

          {/* Signature code window */}
          <div className="hero-rise relative" style={{ animationDelay: '300ms' }}>
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.2rem] bg-accent/10 blur-3xl" />
            <CodeWindow />
            <p className="mt-3 text-center font-mono text-xs text-faint">
              // building real-world apps, one commit at a time
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-faint transition-colors hover:text-muted md:flex"
      >
        <span className="font-mono text-[0.7rem]">scroll</span>
        <FiChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  )
}

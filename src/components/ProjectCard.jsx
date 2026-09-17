import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi'
import ProjectMock from './ProjectMock'

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Actions({ project, size = 'sm' }) {
  const { links, name } = project
  const pad = size === 'lg' ? 'px-5 py-2.5 text-sm' : 'px-4 py-2 text-[0.82rem]'
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.demo ? (
        <a
          href={links.demo}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open the live demo of ${name}`}
          className={`btn-shine inline-flex items-center gap-2 rounded-xl bg-accent ${pad} font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_14px_32px_-14px_rgba(90,140,255,0.9)] active:scale-[0.97]`}
        >
          <FiArrowUpRight size={16} />
          Live demo
        </a>
      ) : null}
      <a
        href={links.code}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View the source code of ${name} on GitHub`}
        className={`btn-shine inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/[0.03] ${pad} font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.06] active:scale-[0.97]`}
      >
        <FiGithub size={16} />
        Source code
      </a>
    </div>
  )
}

/**
 * Two shapes for the same data: a wide spotlight card for the lead project
 * and a compact stacked card for the rest.
 */
export default function ProjectCard({ project, variant = 'standard' }) {
  const spotlight = variant === 'spotlight'
  const { name, tagline, description, highlights, tech, accent, mock } = project

  if (spotlight) {
    return (
      <article className="card group relative overflow-hidden p-6 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: accent }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
              />
              <span className="font-mono text-xs text-faint">featured project</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
              {name}
            </h3>
            <p className="mt-1.5 text-[0.98rem]" style={{ color: accent }}>
              {tagline}
            </p>
            <p className="mt-4 leading-relaxed text-muted">{description}</p>

            <ul className="mt-5 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[0.92rem] leading-relaxed text-muted">
                  <FiCheck
                    aria-hidden="true"
                    size={16}
                    className="mt-[3px] shrink-0"
                    style={{ color: accent }}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <TechList tech={tech} />
            </div>

            <div className="mt-7">
              <Actions project={project} size="lg" />
            </div>
          </div>

          <div className="order-first overflow-hidden rounded-xl border border-line-strong lg:order-last">
            <div className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <ProjectMock type={mock} accent={accent} />
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden border-b border-line">
        <div className="aspect-[16/10] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ProjectMock type={mock} accent={accent} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.3rem] font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="mt-1 text-sm" style={{ color: accent }}>
          {tagline}
        </p>
        <p className="mt-3.5 text-[0.94rem] leading-relaxed text-muted">{description}</p>

        <div className="mt-5">
          <TechList tech={tech} />
        </div>

        <div className="mt-auto pt-6">
          <Actions project={project} />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full"
        style={{ background: accent }}
      />
    </article>
  )
}

import { projects } from '../data/projects'
import { socials } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import ProjectCard from './ProjectCard'
import { FiGithub } from 'react-icons/fi'

export default function Projects() {
  const featured = projects.find((p) => p.spotlight)
  const rest = projects.filter((p) => !p.spotlight)

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="projects"
          title="Things I've designed, built and shipped"
          intro="Full-stack applications built end to end — authentication, REST APIs, databases, payments and AI-assisted features."
        />

        {featured && (
          <Reveal className="mt-10">
            <ProjectCard project={featured} variant="spotlight" />
          </Reveal>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-line bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.95rem] leading-relaxed text-muted">
              Alongside these, I&apos;ve delivered{' '}
              <span className="font-medium text-foreground">10+ live websites and projects</span>{' '}
              for freelance clients. More work — and every commit — lives on GitHub.
            </p>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-line-strong bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.06]"
            >
              <FiGithub size={16} />
              Browse all repositories
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { experience } from '../data/experience'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-surface-raised/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="experience"
          title="Where I've been building"
          intro="Client work and an on-campus innovation internship — hands-on from prototype to production."
        />

        <ol className="relative mt-10 space-y-6 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.role + item.org} delay={i * 100} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+5px)] top-7 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink sm:-left-[calc(2rem+5px)]"
              />
              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-[0.95rem] text-accent">{item.org}</p>
                  </div>
                  <span className="chip shrink-0 border-line-strong text-foreground">
                    {item.type}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar size={14} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin size={14} aria-hidden="true" />
                    {item.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

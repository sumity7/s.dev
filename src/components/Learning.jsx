import { FiCompass, FiTrendingUp } from 'react-icons/fi'
import { learningIntro, learningItems, learningApproach } from '../data/learning'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Learning() {
  return (
    <section id="learning" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="learning"
          title="Currently learning &amp; exploring"
          intro={learningIntro}
        />

        <Reveal>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.08] px-4 py-2 text-[0.85rem] text-amber">
            <FiCompass size={15} aria-hidden="true" />
            In progress — listed as learning, not as expertise
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningItems.map(({ name, stage, Icon, color, note }, i) => (
            <Reveal as="li" key={name} delay={(i % 3) * 80}>
              <article
                className="card group h-full p-6 transition-colors duration-300 hover:border-line-strong"
                style={{ '--c': color }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-[1.15rem] text-[#aeb8cc] transition-all duration-200 group-hover:scale-105 group-hover:[color:var(--c)]">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="rounded-md border border-line bg-white/[0.04] px-2 py-1 font-mono text-[0.65rem] text-faint">
                    {stage}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[1.1rem] font-semibold leading-snug tracking-tight text-foreground">
                  {name}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{note}</p>

                <span
                  aria-hidden="true"
                  className="mt-5 block h-px w-8 transition-all duration-300 group-hover:w-14"
                  style={{ background: color }}
                />
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-line bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:gap-6">
            <h3 className="flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-foreground">
              <FiTrendingUp size={16} className="text-accent" aria-hidden="true" />
              How I learn
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {learningApproach.map((item) => (
                <li key={item} className="chip border-line-strong text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

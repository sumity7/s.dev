import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'
import { education } from '../data/education'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Education() {
  const [primary, ...secondary] = education

  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading eyebrow="education" title="Academic background" />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="card relative h-full overflow-hidden p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
              />
              <div className="relative">
                <span className="chip border-accent/40 text-accent">Current degree</span>
                <h3 className="mt-4 font-display text-[1.55rem] font-semibold leading-snug tracking-tight text-foreground">
                  {primary.degree}
                </h3>
                <p className="mt-2 text-[1.02rem] text-foreground/90">{primary.school}</p>
                {primary.note && <p className="mt-1 text-sm text-faint">{primary.note}</p>}

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar size={14} aria-hidden="true" />
                    {primary.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin size={14} aria-hidden="true" />
                    {primary.location}
                  </span>
                </div>

                <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3">
                  <FiAward className="text-amber" size={18} aria-hidden="true" />
                  <span className="font-display text-lg font-semibold text-foreground">
                    {primary.result}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full divide-y divide-line p-2">
              {secondary.map((item) => (
                <div key={item.degree} className="px-5 py-5">
                  <h3 className="text-[1.02rem] font-medium leading-snug text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-faint">{item.period}</span>
                    <span className="font-medium text-foreground">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

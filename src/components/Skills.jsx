import { skillGroups, coreConcepts } from '../data/skills'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="relative bg-surface-raised/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="skills"
          title="Tools I build with"
          intro="A practical, hands-on toolkit built around the MERN stack — grouped by where each piece fits, with an honest note where something is still at a basic level rather than padded with percentages."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 3) * 80}>
              <div className="card h-full p-6">
                <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {group.title}
                </h3>

                {group.note && <p className="mt-2 text-[0.85rem] text-faint">{group.note}</p>}

                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map(({ name, Icon, color, level }) => (
                    <li key={name}>
                      <span
                        className="group inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.02] px-3 py-2 text-sm text-muted transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:text-foreground hover:shadow-[0_10px_22px_-12px_var(--c)]"
                        style={{ '--c': color }}
                      >
                        <Icon
                          aria-hidden="true"
                          className="text-[1.05rem] text-[#aeb8cc] transition-all duration-200 group-hover:scale-110 group-hover:[color:var(--c)]"
                        />
                        {name}
                        {level && (
                          <span className="rounded-md border border-line bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.65rem] uppercase text-faint">
                            {level}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core CS foundations */}
        <Reveal delay={120}>
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-line bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:gap-6">
            <h3 className="shrink-0 text-[0.95rem] font-semibold text-foreground">
              Core CS foundations
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {coreConcepts.map((concept) => (
                <li key={concept} className="chip border-line-strong text-foreground">
                  {concept}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { FiExternalLink, FiUsers } from 'react-icons/fi'
import { FaJava } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { certifications } from '../data/certifications'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const themes = {
  java: { Icon: FaJava, color: '#F6B35C' },
  mern: { Icon: SiReact, color: '#5A8CFF' },
  soft: { Icon: FiUsers, color: '#59C6E6' },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-surface-raised/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="certifications"
          title="Certifications & training"
          intro="Structured programs that shaped my fundamentals and full-stack practice."
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const theme = themes[cert.theme] || themes.mern
            const { Icon, color } = theme
            const Wrapper = cert.credential ? 'a' : 'div'
            const wrapperProps = cert.credential
              ? { href: cert.credential, target: '_blank', rel: 'noreferrer noopener' }
              : {}

            return (
              <Reveal as="li" key={cert.title} delay={(i % 3) * 90} className="h-full">
                <Wrapper
                  {...wrapperProps}
                  className="card group flex h-full flex-col p-6"
                  style={{ '--c': color }}
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl border border-line transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-[0_10px_22px_-10px_var(--c)]"
                    style={{ background: `${color}1f`, color }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{cert.org}</p>

                  <div className="mt-auto flex items-center justify-between pt-5 text-sm text-faint">
                    <span>{cert.period}</span>
                    {cert.credential && (
                      <span className="inline-flex items-center gap-1.5 text-accent">
                        Verify
                        <FiExternalLink size={13} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

import {
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiLayers,
  FiMapPin,
  FiTarget,
} from 'react-icons/fi'
import { site } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const stats = [
  { value: '10+', label: 'Websites & projects live' },
  { value: '2026', label: 'B.Tech CSE graduate' },
  { value: '3', label: 'Certifications' },
  { value: '7.13', label: 'CGPA' },
]

const focus = [
  'Full-stack web apps',
  'REST APIs',
  'Authentication',
  'Payments',
  'AI-assisted features',
]

const facts = [
  { Icon: FiBriefcase, label: 'Role', value: 'MERN Full Stack Developer' },
  { Icon: FiLayers, label: 'Core stack', value: 'MongoDB, Express, React, Node.js' },
  { Icon: FiBookOpen, label: 'Education', value: 'B.Tech CSE, 2026' },
  { Icon: FiMapPin, label: 'Location', value: 'Lucknow, India' },
  { Icon: FiCheckCircle, label: 'Status', value: 'Seeking entry-level roles' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="about"
          title="A full-stack developer with a builder's mindset"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Portrait + quick facts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal direction="left">
              <figure className="card group relative overflow-hidden p-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-accent/15 to-transparent"
                />
                <img
                  src="/sumit-yadav.webp"
                  alt="Portrait of Sumit Yadav, full stack developer"
                  width="900"
                  height="1121"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink via-ink/85 to-transparent px-5 pb-4 pt-12">
                  <span>
                    <span className="block font-display text-[1.05rem] font-semibold text-foreground">
                      Sumit Yadav
                    </span>
                    <span className="block font-mono text-xs text-faint">
                      MERN Full Stack Developer
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-line bg-white/[0.05] px-2.5 py-1 text-[0.7rem] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <dl className="card h-full divide-y divide-line p-2">
                {facts.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3.5 px-4 py-[0.8rem]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-accent">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs text-faint">{label}</dt>
                      <dd className="truncate text-sm font-medium text-foreground">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Narrative */}
          <Reveal className="lg:col-span-7" direction="right" delay={80}>
            <div className="card h-full p-7 sm:p-8">
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-muted">
                <p>
                  I&apos;m a Computer Science engineering graduate who builds full-stack web
                  applications end to end — from React interfaces to Node and Express APIs backed
                  by MongoDB. I like turning real requirements into working products: authentication,
                  role-based dashboards, online payments and AI-assisted features.
                </p>
                <p>
                  Alongside my own projects I work with freelance clients, where I&apos;ve delivered{' '}
                  <span className="text-foreground">10+ live websites and applications</span> —
                  from first wireframe through to deployment. That work taught me to scope
                  realistically, communicate clearly and ship on time.
                </p>
                <p>
                  My core is the <span className="text-foreground">MERN stack</span> — MongoDB,
                  Express, React and Node.js — supported by solid fundamentals in data structures,
                  OOP, DBMS and operating systems. I care about clean, maintainable code and steady,
                  continuous learning.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3.5 rounded-xl border border-accent/25 bg-accent/[0.06] p-4 sm:p-5">
                <FiTarget
                  aria-hidden="true"
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-medium text-foreground">Career goal — </span>
                  {site.careerGoal}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="card group h-full p-6 hover:border-accent/40">
                <div className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-[2.7rem]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-muted">{stat.label}</div>
                <div className="mt-4 h-px w-10 origin-left bg-gradient-to-r from-accent to-amber transition-all duration-300 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

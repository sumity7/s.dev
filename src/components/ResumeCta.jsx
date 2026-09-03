import { FiDownload, FiFileText, FiMail } from 'react-icons/fi'
import { site } from '../data/site'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

export default function ResumeCta() {
  return (
    <section aria-labelledby="resume-heading" className="relative pb-4 pt-2 sm:pb-8">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/70 p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-amber/15 blur-3xl"
            />

            <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-xs text-muted">
                  <FiFileText size={13} aria-hidden="true" />
                  resume.pdf
                </span>
                <h2
                  id="resume-heading"
                  className="mt-4 font-display text-[1.7rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[2rem]"
                >
                  Want the one-page version?
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  My résumé covers the same ground in a format you can forward, print or drop
                  straight into your ATS.
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-faint">
                  {site.careerGoal}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={site.resume}
                  download="Sumit-Yadav-Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="primary"
                  size="lg"
                >
                  <FiDownload size={18} aria-hidden="true" />
                  Download résumé
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  <FiMail size={18} aria-hidden="true" />
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

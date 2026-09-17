import { useState } from 'react'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiCopy,
  FiExternalLink,
  FiLoader,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import { site, socials, FORMSPREE_ID, FORMSUBMIT_ENDPOINT } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import SocialLinks from './ui/SocialLinks'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const empty = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'That name looks a little short.'

  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!values.message.trim()) errors.message = 'Please write a short message.'
  else if (values.message.trim().length < 10)
    errors.message = 'A little more detail would help — 10 characters minimum.'

  return errors
}

// Opens the visitor's mail client with everything pre-filled. Used as the
// fallback whenever a network submission can't go through.
function mailtoHref(values) {
  const subject = encodeURIComponent(
    values?.name ? `Portfolio enquiry from ${values.name.trim()}` : 'Hello Sumit',
  )
  const body = values?.message
    ? encodeURIComponent(
        `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`,
      )
    : ''
  return `mailto:${site.email}?subject=${subject}${body ? `&body=${body}` : ''}`
}

const fieldBase =
  'w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-[0.95rem] text-foreground placeholder:text-faint/80 transition-colors duration-200 focus:outline-none'

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | fallback | error
  const [copied, setCopied] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
    if (status !== 'idle' && status !== 'submitting') setStatus('idle')
  }

  const onBlur = (e) => {
    const { name } = e.target
    const next = validate(values)
    setErrors((err) => ({ ...err, [name]: next[name] }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(Object.keys(next)[0])
      if (first) first.focus()
      return
    }

    setStatus('submitting')

    const endpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : FORMSUBMIT_ENDPOINT
    const payload = FORMSPREE_ID
      ? { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() }
      : {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: `Portfolio enquiry from ${values.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      setValues(empty)
      setErrors({})
      setStatus('success')
    } catch {
      // Network blocked, offline, or the service is down — hand the message to
      // the visitor's mail client so it still reaches the inbox.
      window.location.href = mailtoHref(values)
      setStatus('fallback')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const cls = (field) =>
    `${fieldBase} ${
      errors[field] ? 'border-red-400/60 focus:border-red-400' : 'border-line focus:border-accent/70'
    }`

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something together"
          intro="I'm actively looking for entry-level roles in IT and software development, and I take on freelance projects too. Tell me what you're working on and I'll get back to you."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <Reveal direction="left">
            <div className="card flex h-full flex-col p-7 sm:p-8">
              <h3 className="text-[1.05rem] font-semibold text-foreground">Get in touch</h3>
              <p className="mt-3 leading-relaxed text-muted">
                The fastest way to reach me is email — I usually reply within a day.
              </p>

              <div className="mt-6 space-y-3">
                {/* Email — mailto opens the visitor's default mail app */}
                <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] p-3.5 transition-colors duration-200 hover:border-accent/40">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-accent">
                    <FiMail size={17} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-faint">Email</div>
                    <a
                      href={mailtoHref()}
                      className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? 'Email address copied' : 'Copy email address'}
                    title={copied ? 'Copied' : 'Copy'}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-faint transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {copied ? (
                      <FiCheckCircle size={15} className="text-emerald-400" />
                    ) : (
                      <FiCopy size={15} />
                    )}
                  </button>
                </div>

                <a
                  href={mailtoHref()}
                  className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-[0_12px_34px_-14px_rgba(90,140,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft active:scale-[0.97]"
                >
                  <FiMail size={16} aria-hidden="true" />
                  Email me directly
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] p-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-accent">
                    <FiMapPin size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs text-faint">Location</div>
                    <div className="text-sm font-medium text-foreground">
                      {site.location} · open to remote
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <p className="mb-3 text-sm text-faint">Find me online</p>
                <SocialLinks size="lg" />
                <a
                  href={socials.portfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-muted mt-4 inline-flex items-center gap-1.5 text-sm"
                >
                  {socials.portfolio.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  <FiExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              acceptCharset="UTF-8"
              className="card h-full p-7 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Your name"
                    className={cls('name')}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                    >
                      <FiAlertCircle size={14} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="you@company.com"
                    className={cls('email')}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                    >
                      <FiAlertCircle size={14} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="A little about the role or project you have in mind…"
                  className={`${cls('message')} resize-y`}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                  >
                    <FiAlertCircle size={14} aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-[0.95rem] font-semibold text-ink shadow-[0_12px_34px_-14px_rgba(90,140,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-soft active:scale-[0.97] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100"
                >
                  {status === 'submitting' ? (
                    <FiLoader size={17} className="animate-spin" aria-hidden="true" />
                  ) : (
                    <FiSend size={17} aria-hidden="true" />
                  )}
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                <p aria-live="polite" className="text-sm">
                  {status === 'success' && (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <FiCheckCircle size={15} aria-hidden="true" />
                      Thanks — your message has been sent. I&apos;ll be in touch soon.
                    </span>
                  )}
                  {status === 'fallback' && (
                    <span className="inline-flex items-center gap-1.5 text-amber">
                      <FiMail size={15} aria-hidden="true" />
                      Your mail app is opening with the message ready to send.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

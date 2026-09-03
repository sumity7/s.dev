import Reveal from './Reveal'

/**
 * Consistent section header: a code-comment eyebrow + title + optional intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'
  return (
    <Reveal
      as="header"
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{`// ${eyebrow}`}</p>}
      <h2 className="text-[1.9rem] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  )
}

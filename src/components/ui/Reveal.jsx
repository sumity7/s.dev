import { useInView } from '../../hooks/useInView'

/**
 * Wraps content in a subtle scroll-reveal. `delay` staggers siblings.
 * `direction` picks the entrance: 'up' (default), 'left', 'right' or 'scale'.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  direction = 'up',
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()
  const base = direction === 'up' ? 'reveal' : `reveal reveal-${direction}`
  return (
    <Tag
      ref={ref}
      className={`${base} ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

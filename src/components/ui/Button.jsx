const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 will-change-transform focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[0.95rem]',
}

const variants = {
  primary:
    'bg-accent text-ink font-semibold shadow-[0_12px_34px_-14px_rgba(90,140,255,0.9)] hover:bg-accent-soft hover:-translate-y-0.5',
  secondary:
    'border border-line-strong bg-white/[0.03] text-foreground hover:border-accent/60 hover:bg-white/[0.06] hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-foreground hover:bg-white/[0.04]',
}

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button')
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  return (
    <Tag className={cls} href={href} {...rest}>
      {children}
    </Tag>
  )
}

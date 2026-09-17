import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { socials, site } from '../../data/site'

/**
 * Row of social/contact icon links. Used in the hero, contact and footer.
 */
export default function SocialLinks({ size = 'md', className = '' }) {
  const dim = size === 'lg' ? 'h-11 w-11' : 'h-10 w-10'
  const icon = size === 'lg' ? 20 : 18

  const items = [
    { label: 'GitHub', href: socials.github, Icon: FiGithub },
    { label: 'LinkedIn', href: socials.linkedin, Icon: FiLinkedin },
    { label: 'Instagram', href: socials.instagram, Icon: FiInstagram },
    { label: 'Email', href: `mailto:${site.email}`, Icon: FiMail },
  ]

  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ label, href, Icon }) => {
        const external = href.startsWith('http')
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              className={`group grid ${dim} place-items-center rounded-xl border border-line bg-white/[0.02] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/[0.08] hover:text-foreground hover:shadow-[0_12px_26px_-12px_rgba(90,140,255,0.6)]`}
            >
              <Icon
                size={icon}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

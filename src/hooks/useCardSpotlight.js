import { useEffect } from 'react'

/**
 * Drives the cursor-follow glow on `.card` elements (see `.card::before` in
 * index.css) by writing the pointer position as --mx/--my percentages.
 * Uses one delegated listener instead of a handler per card.
 */
export function useCardSpotlight() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const noHover = window.matchMedia('(hover: none)').matches
    if (prefersReduced || noHover) return

    let frame = null

    const onMove = (e) => {
      const card = e.target.closest?.('.card')
      if (!card) return
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
        card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
      })
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}

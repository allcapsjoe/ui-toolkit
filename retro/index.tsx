import './retro.css'
import type { ReactNode } from 'react'

/**
 * RetroLayout — standalone theme wrapper.
 * 
 * Drop `@allcapsjoe/themes` into any React project.
 * Wrap your app root with <RetroLayout> and all child 
 * components will inherit the Retro (Mexico 70) design 
 * system via CSS custom properties on `[data-skin="retro"]`.
 */
export function RetroLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="retro"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

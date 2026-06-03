import './neon.css'
import type { ReactNode } from 'react'

/**
 * NeonLayout — standalone theme wrapper.
 * 
 * Drop `@allcapsjoe/themes` into any React project.
 * Wrap your app root with <NeonLayout> and all child 
 * components will inherit the Neon design system via 
 * CSS custom properties on `[data-skin="neon"]`.
 */
export function NeonLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="neon"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

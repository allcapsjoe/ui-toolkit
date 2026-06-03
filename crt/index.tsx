import './crt.css'
import type { ReactNode } from 'react'

/**
 * CrtLayout — standalone theme wrapper.
 * 
 * Drop `@allcapsjoe/themes` into any React project.
 * Wrap your app root with <CrtLayout> and all child 
 * components will inherit the CRT design system via 
 * CSS custom properties on `[data-skin="crt"]`.
 */
export function CrtLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="crt"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

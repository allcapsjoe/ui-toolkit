import './cyberpunk.css'
import type { ReactNode } from 'react'

/**
 * CyberpunkLayout — standalone theme wrapper.
 * 
 * Wrap your app root with <CyberpunkLayout> and all child 
 * components will inherit the Cyberpunk design system.
 */
export function CyberpunkLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="cyberpunk"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

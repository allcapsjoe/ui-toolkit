import './captain.css'
import type { ReactNode } from 'react'

/**
 * CaptainLayout — standalone theme wrapper.
 * 
 * Wrap your app root with <CaptainLayout> and all child 
 * components will inherit the premium dark-first Captain design system.
 */
export function CaptainLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="captain"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

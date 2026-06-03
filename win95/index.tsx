import './win95.css'
import type { ReactNode } from 'react'

/**
 * Win95Layout — standalone theme wrapper.
 * 
 * Wrap your app root with <Win95Layout> and all child 
 * components will inherit the Windows 95 design system.
 */
export function Win95Layout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="win95"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

import './eink.css'
import type { ReactNode } from 'react'

/**
 * EinkLayout — standalone theme wrapper.
 * 
 * Wrap your app root with <EinkLayout> and all child 
 * components will inherit the E-Ink design system.
 */
export function EinkLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="eink"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

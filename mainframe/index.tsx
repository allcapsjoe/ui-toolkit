import './mainframe.css'
import type { ReactNode } from 'react'

/**
 * MainframeLayout — standalone theme wrapper.
 * 
 * Wrap your app root with <MainframeLayout> and all child 
 * components will inherit the Mainframe design system.
 */
export function MainframeLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="mainframe"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

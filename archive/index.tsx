import './archive.css'
import type { ReactNode } from 'react'

/**
 * ArchiveLayout — standalone theme wrapper.
 * 
 * Drop `@allcapsjoe/themes` into any React project.
 * Wrap your app root with <ArchiveLayout> and all child 
 * components will inherit the Archive (WE ARE 26) design 
 * system via CSS custom properties on `[data-skin="archive"]`.
 */
export function ArchiveLayout({ children, fontScale }: { children: ReactNode; fontScale?: number }) {
  return (
    <div
      data-skin="archive"
      style={fontScale !== undefined ? { ['--ads-font-scale' as string]: fontScale } : undefined}
    >
      {children}
    </div>
  )
}

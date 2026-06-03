import React from 'react';

export interface AppShellProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * AppShell
 * 
 * The structural foundation of an ADS application.
 * Handles the sidebar, header, and main content area responsive layout.
 */
export const AppShell: React.FC<AppShellProps> = ({ children, sidebar, header, footer }) => {
  return (
    <div className="ads-app-shell" style={{
      display: 'grid',
      gridTemplateAreas: `
        "header header"
        "sidebar main"
        "footer footer"
      `,
      gridTemplateColumns: sidebar ? '250px 1fr' : '1fr',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>
      {header && (
        <header style={{ gridArea: 'header', borderBottom: '1px solid var(--ads-color-border)' }}>
          {header}
        </header>
      )}
      
      {sidebar && (
        <aside style={{ 
          gridArea: 'sidebar', 
          borderRight: '1px solid var(--ads-color-border)',
          padding: '1rem',
          background: 'var(--ads-color-surface)' 
        }}>
          {sidebar}
        </aside>
      )}

      <main style={{ gridArea: 'main', padding: '1.5rem', overflowY: 'auto' }}>
        {children}
      </main>

      {footer && (
        <footer style={{ gridArea: 'footer', borderTop: '1px solid var(--ads-color-border)', padding: '0.5rem' }}>
          {footer}
        </footer>
      )}
    </div>
  );
};

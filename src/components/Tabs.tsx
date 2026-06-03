import React from 'react';

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  variant?: 'primary' | 'secondary';
}

/**
 * Tabs
 * 
 * Standard navigation tabs that shift style based on the active skin.
 * In Win95: Classic folder-style tabs.
 * In CRT: Glowing phosphor indicators.
 */
export const Tabs: React.FC<TabsProps> = ({ items, activeTab, onTabChange, variant = 'primary' }) => {
  return (
    <div className="ads-tabs-container" style={{ 
      display: 'flex', 
      gap: '2px', 
      marginBottom: '1rem',
      borderBottom: '1px solid var(--ads-color-border)'
    }}>
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontFamily: 'var(--ads-font-mono)',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              border: '1px solid var(--ads-color-border)',
              borderBottom: isActive ? '1px solid var(--ads-color-bg)' : '1px solid var(--ads-color-border)',
              background: isActive ? 'var(--ads-color-bg)' : 'var(--ads-color-surface)',
              color: isActive ? 'var(--ads-color-primary)' : 'var(--ads-color-text-muted)',
              marginBottom: '-1px',
              position: 'relative',
              zIndex: isActive ? 2 : 1,
              transition: 'all 0.1s'
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

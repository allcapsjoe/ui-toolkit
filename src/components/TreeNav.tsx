import React from 'react';

export interface TreeItem {
  id: string;
  label: string;
  children?: TreeItem[];
}

export interface TreeNavProps {
  items: TreeItem[];
  onItemClick?: (item: TreeItem) => void;
}

/**
 * TreeNav
 * 
 * Hierarchical folder-style navigation.
 */
export const TreeNav: React.FC<TreeNavProps> = ({ items, onItemClick }) => {
  const renderItem = (item: TreeItem, depth = 0) => (
    <div key={item.id}>
      <div 
        onClick={() => onItemClick?.(item)}
        style={{
          padding: '4px 8px',
          paddingLeft: `${depth * 16 + 8}px`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.85rem',
          transition: 'background 0.2s'
        }}
        className="ads-tree-item"
      >
        <span style={{ opacity: 0.5 }}>{item.children ? '📁' : '📄'}</span>
        {item.label}
      </div>
      {item.children && item.children.map(child => renderItem(child, depth + 1))}
    </div>
  );

  return (
    <div className="ads-tree-nav" style={{ fontFamily: 'var(--ads-font-mono)' }}>
      {items.map(item => renderItem(item))}
      <style>{`
        .ads-tree-item:hover { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
};

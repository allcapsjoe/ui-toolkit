import React from 'react';

export interface GridProps {
  children: React.ReactNode;
  cols?: number | string;
  gap?: string | number;
  className?: string;
}

/**
 * Grid
 * 
 * A responsive grid system that adapts to the CDS theme.
 */
export const Grid: React.FC<GridProps> = ({ children, cols = 1, gap = '1rem', className = '' }) => {
  return (
    <div className={`ads-grid ${className}`} style={{
      display: 'grid',
      gridTemplateColumns: typeof cols === 'number' ? `repeat(${cols}, 1fr)` : cols,
      gap
    }}>
      {children}
    </div>
  );
};

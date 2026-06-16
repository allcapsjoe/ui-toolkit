import React from 'react';

export interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: string | number;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Stack
 * 
 * A fundamental layout utility for linear spacing.
 * Predictable for AI agents to structure content without complex CSS.
 */
export const Stack: React.FC<StackProps> = ({ 
  children, 
  direction = 'column', 
  gap = '1rem', 
  align, 
  justify, 
  className = '',
  style
}) => {
  return (
    <div className={`ads-stack ads-stack--${direction} ${className}`} style={{
      display: 'flex',
      flexDirection: direction,
      gap,
      alignItems: align,
      justifyContent: justify,
      ...style
    }}>
      {children}
    </div>
  );
};

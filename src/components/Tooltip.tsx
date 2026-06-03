import React, { useId } from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

/**
 * Tooltip
 * 
 * A hover and focus-triggered info box.
 */
export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const tooltipId = useId();

  // Safely clone the child to inject aria-describedby
  const renderChild = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        'aria-describedby': tooltipId
      });
    }
    return children;
  };

  return (
    <div className="ads-tooltip-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
      {renderChild()}
      <div 
        id={tooltipId}
        role="tooltip"
        className="ads-tooltip" 
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px',
          padding: '4px 8px',
          background: 'var(--ads-color-primary)',
          color: 'var(--ads-color-bg)',
          fontSize: '0.7rem',
          whiteSpace: 'nowrap',
          zIndex: 100,
          display: 'none',
          fontFamily: 'var(--ads-font-mono)',
          textTransform: 'uppercase',
          boxShadow: 'var(--ads-glow)'
        }}
      >
        {content}
      </div>
      <style>{`
        .ads-tooltip-wrapper:hover .ads-tooltip,
        .ads-tooltip-wrapper:focus-within .ads-tooltip { 
          display: block; 
        }
      `}</style>
    </div>
  );
};

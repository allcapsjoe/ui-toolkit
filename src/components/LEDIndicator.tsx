import React from 'react';

export interface LEDIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  isBlinking?: boolean;
  label?: string;
}

/**
 * LEDIndicator
 * 
 * A glowing status indicator mimicking physical hardware LEDs.
 * Perfect for retro terminals, settings control panels, and server dashboards.
 */
export const LEDIndicator = React.forwardRef<HTMLDivElement, LEDIndicatorProps>(
  ({ className, color = 'primary', size = 'md', isBlinking = false, label, style, ...props }, ref) => {
    const sizeMap = {
      sm: '8px',
      md: '12px',
      lg: '16px',
    };

    const ledSize = sizeMap[size];

    // Colors mapping to ADS variables
    const colorMap = {
      primary: 'var(--ads-color-primary, #39ff14)',
      secondary: 'var(--ads-color-secondary, #ff6b00)',
      error: '#ff3333',
      success: '#00ff66',
      warning: '#ffcc00',
    };

    const ledColor = colorMap[color];

    const containerStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'var(--ads-font-mono, monospace)',
      fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1rem' : '0.85rem',
      textTransform: 'uppercase',
      color: 'var(--ads-color-text)',
      ...style,
    };

    const ledStyles: React.CSSProperties = {
      width: ledSize,
      height: ledSize,
      borderRadius: '50%',
      backgroundColor: ledColor,
      boxShadow: `0 0 8px 1px ${ledColor}`,
      border: '1px solid rgba(0, 0, 0, 0.4)',
      transition: 'all 0.2s',
      flexShrink: 0,
    };

    return (
      <div ref={ref} style={containerStyles} className={`ads-led ${className || ''}`} {...props}>
        <div 
          style={ledStyles} 
          className={`ads-led-bulb ${isBlinking ? 'ads-led-bulb--blinking' : ''}`}
        />
        {label && <span className="ads-led-label">{label}</span>}
      </div>
    );
  }
);

LEDIndicator.displayName = 'LEDIndicator';

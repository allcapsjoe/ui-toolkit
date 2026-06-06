import React from 'react';
import { RetroAudio } from '../utils/audio';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
}

/**
 * CDS Button
 * 
 * A theme-aware button that maps to CDS CSS variables.
 * Designed to be predictable for AI agents and highly tactile with sound effects.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isFullWidth, onClick, ...props }, ref) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontFamily: 'var(--ads-font-mono)',
      textTransform: 'uppercase' as const,
      width: isFullWidth ? '100%' : 'auto',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      RetroAudio.play('click');
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        style={{ ...baseStyles, ...props.style }}
        className={`ads-button ads-button--${variant} ads-button--${size} ${className || ''}`}
        onClick={handleClick}
        {...props}
      />
    );
  }
);


Button.displayName = 'Button';

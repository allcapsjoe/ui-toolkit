import React from 'react';

export interface SliderProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  variant?: 'primary' | 'secondary';
}

/**
 * Slider
 * 
 * A themed range input.
 * Features custom styling for the track and thumb to match CRT/Win95 identities.
 */
export const Slider: React.FC<SliderProps> = ({ 
  label, 
  value, 
  min = 0, 
  max = 100, 
  onChange,
  variant = 'primary'
}) => {
  return (
    <div className="ads-slider-container" style={{ marginBottom: '1rem' }}>
      {label && (
        <div style={{ 
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          marginBottom: '4px',
          color: 'var(--ads-color-text-muted)'
        }}>
          {label}: {value}
        </div>
      )}
      <input 
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{
          width: '100%',
          accentColor: variant === 'primary' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)'
        }}
      />
    </div>
  );
};

import React from 'react';

export interface SliderProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
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
  step,
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
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{
          width: '100%',
          accentColor: variant === 'primary' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)'
        }}
      />
    </div>
  );
};

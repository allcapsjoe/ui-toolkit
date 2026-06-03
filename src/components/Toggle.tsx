import React from 'react';

export interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

/**
 * Toggle / Switch
 * 
 * A tactile binary control.
 * In Win95: Inset checkbox style.
 * In CRT: Binary toggle with glowing status.
 */
export const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange, disabled }) => {
  return (
    <label 
      className="ads-toggle-label"
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        userSelect: 'none',
        fontFamily: 'var(--ads-font-mono)',
        textTransform: 'uppercase',
        fontSize: '0.85rem'
      }}
    >
      <div 
        className={`ads-toggle-track ${checked ? 'is-checked' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: '40px',
          height: '20px',
          border: '1px solid var(--ads-color-primary)',
          background: 'var(--ads-color-bg)',
          position: 'relative',
          padding: '2px',
          transition: 'all 0.2s'
        }}
      >
        <div 
          className="ads-toggle-thumb"
          style={{
            position: 'absolute',
            left: checked ? 'calc(100% - 18px)' : '2px',
            top: '2px',
            width: '14px',
            height: '14px',
            background: checked ? 'var(--ads-color-primary)' : 'var(--ads-color-text-muted)',
            boxShadow: checked ? 'var(--ads-glow)' : 'none',
            transition: 'all 0.2s'
          }} />
      </div>
      {label && <span>{label}</span>}
    </label>
  );
};

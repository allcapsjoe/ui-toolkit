import React from 'react';

export type Skin = 'crt' | 'win95' | 'cyberpunk' | 'eink' | 'mainframe' | 'retro' | 'archive' | 'neon';

export interface ThemeSwitcherProps {
  skin: Skin;
  onChange: (skin: Skin) => void;
  skinsList?: Array<{ id: Skin; label: string }>;
  className?: string;
}

const defaultSkins: Array<{ id: Skin; label: string }> = [
  { id: 'crt',       label: 'CRT' },
  { id: 'win95',     label: '95' },
  { id: 'cyberpunk', label: 'CYBER' },
  { id: 'eink',      label: 'EINK' },
  { id: 'mainframe', label: 'SYS' },
  { id: 'retro',     label: 'RETRO' },
  { id: 'archive',   label: '26' },
  { id: 'neon',      label: 'NEON' }
];

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  skin,
  onChange,
  skinsList = defaultSkins,
  className = ''
}) => {
  return (
    <div className={`ads-theme-switcher ${className}`} aria-label="Skin selector">
      {skinsList.map((item) => {
        const isActive = skin === item.id;
        return (
          <button
            type="button"
            key={item.id}
            className={isActive ? 'is-active' : ''}
            onClick={() => onChange(item.id)}
            title={`${item.label} skin`}
          >
            {item.label}
          </button>
        );
      })}
      <style>{`
        .ads-theme-switcher {
          display: inline-flex;
          flex: 0 0 auto;
          padding: 0.18rem;
          border: 1px solid var(--ads-color-border, var(--line, rgba(255, 255, 255, 0.15)));
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.32);
          align-items: center;
          gap: 2px;
        }
        .ads-theme-switcher button {
          min-width: 2.2rem;
          height: 2rem;
          border-radius: 999px;
          background: transparent;
          color: var(--ads-color-text-muted, var(--muted, #888888));
          border: none;
          cursor: pointer;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0 0.5rem;
          text-transform: uppercase;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none !important;
          margin: 0 !important;
        }
        .ads-theme-switcher button:hover {
          color: var(--ads-color-text, #ffffff);
          background: rgba(255, 255, 255, 0.05);
        }
        .ads-theme-switcher button.is-active {
          background: var(--ads-color-primary, var(--accent, #39ff14));
          color: var(--ads-color-bg, #000000) !important;
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { Panel } from './Panel';
import { Button } from './Button';

export interface RetroModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

/**
 * RetroModal
 * 
 * A centered dialog box that follows the ADS theme contract.
 * Includes a backdrop and themed "Window" container.
 */
export const RetroModal: React.FC<RetroModalProps> = ({ 
  isOpen, 
  onClose, 
  title = "SYSTEM ALERT", 
  children, 
  actions,
  variant = 'primary'
}) => {
  if (!isOpen) return null;

  return (
    <div className="ads-modal-overlay" style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      backdropFilter: 'blur(2px)'
    }}>
      <div className="ads-modal-content" style={{
        width: '100%',
        maxWidth: '500px',
        animation: 'ads-pop-in 0.2s ease-out'
      }}>
        <Panel 
          title={title} 
          variant={variant}
          actions={
            <Button 
              onClick={onClose} 
              style={{ padding: '0 4px', fontSize: '0.8rem', minWidth: '20px' }}
            >
              X
            </Button>
          }
        >
          <div style={{ padding: '0.5rem 0' }}>
            {children}
          </div>
          {actions && (
            <div style={{ 
              marginTop: '1.5rem', 
              display: 'flex', 
              justifyContent: 'flex-end', 
              gap: '0.5rem' 
            }}>
              {actions}
            </div>
          )}
        </Panel>
      </div>
      <style>{`
        @keyframes ads-pop-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

import React, { useState, useEffect, type ReactNode } from 'react';
import { IconButton } from './IconButton';
import './Workbench.css';


const InfoIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="ads-workbench__svg-icon"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const MenuIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="ads-workbench__svg-icon"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="ads-workbench__svg-icon"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


export interface WorkbenchToastProps {
  message: ReactNode;
  onDismiss: () => void;
  isOpen: boolean;
}

export interface WorkbenchSubPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export interface WorkbenchProps {
  leftPanel: ReactNode;
  leftTitle?: string;
  leftEyebrow?: string;
  leftSubPanel?: ReactNode;
  leftToast?: ReactNode;
  
  centerPanel: ReactNode;
  centerToast?: ReactNode;
  
  rightPanel: ReactNode;
  rightTitle?: string;
  rightEyebrow?: string;
  rightSubPanel?: ReactNode;
  rightToast?: ReactNode;
  
  mobileTitle: string;
  mobileSubtitle?: string;
  appBarActions?: ReactNode;
  className?: string;
}

/**
 * Workbench
 * 
 * An advanced dashboard layout with 3-column structure, nested sub-panels,
 * and contextual toasts locked to the viewport bottom.
 */
export const Workbench: React.FC<WorkbenchProps> = ({
  leftPanel,
  leftTitle = 'System A',
  leftEyebrow = 'Primary',
  leftSubPanel,
  leftToast,
  
  centerPanel,
  centerToast,
  
  rightPanel,
  rightTitle = 'System B',
  rightEyebrow = 'Secondary',
  rightSubPanel,
  rightToast,
  
  mobileTitle,
  mobileSubtitle,
  appBarActions,
  className = '',
}) => {
  const [openDrawer, setOpenDrawer] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const toggleDrawer = (side: 'left' | 'right') => {
    setOpenDrawer(prev => prev === side ? null : side);
  };

  const closeDrawer = () => setOpenDrawer(null);

  return (
    <div className={`ads-workbench ${className} ${openDrawer ? 'has-open-drawer' : ''}`}>
      {/* App Bar - Grid layout for perfect alignment */}
      <header className="ads-workbench__appbar">
        <div className="ads-workbench__appbar-start">
          <IconButton
            variant="outline"
            icon={<InfoIcon size={18} />}
            onClick={() => toggleDrawer('left')}
            aria-label="Toggle Left Panel"
            aria-expanded={openDrawer === 'left'}
            className="ads-workbench__icon-button"
          />
        </div>
        
        <div className="ads-workbench__title-group">
          <span className="ads-workbench__title">{mobileTitle}</span>
          {mobileSubtitle && <small className="ads-workbench__subtitle">{mobileSubtitle}</small>}
        </div>

        <div className="ads-workbench__appbar-end">
          {appBarActions && <div className="ads-workbench__appbar-actions">{appBarActions}</div>}
          <IconButton
            variant="outline"
            icon={<MenuIcon size={18} />}
            onClick={() => toggleDrawer('right')}
            aria-label="Toggle Right Panel"
            aria-expanded={openDrawer === 'right'}
            className="ads-workbench__icon-button"
          />
        </div>
      </header>

      {/* Mobile Scrim */}
      {openDrawer && (
        <div 
          className="ads-workbench__scrim" 
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* 3-Column Layout */}
      <div className="ads-workbench__layout">
        
        {/* LEFT COLUMN */}
        <aside className={`ads-workbench__panel ads-workbench__left ${openDrawer === 'left' ? 'is-open' : ''}`}>
          <header className="ads-workbench__panel-header">
            <div>
              <p className="eyebrow">{leftEyebrow}</p>
              <h2>{leftTitle}</h2>
            </div>
            <button type="button" className="ads-workbench__close-action" onClick={closeDrawer}>
              Close
            </button>
          </header>
          <div className="ads-workbench__panel-content">
            {leftPanel}
          </div>
          
          {/* Left Sub-Panel */}
          {leftSubPanel && (
            <div className="ads-workbench__sub-panel ads-workbench__sub-panel--left">
              {leftSubPanel}
            </div>
          )}
          
          {/* Left Toast */}
          {leftToast && (
            <div className="ads-workbench__toast-container ads-workbench__toast-container--left">
              {leftToast}
            </div>
          )}
        </aside>

        {/* CENTER COLUMN */}
        <main className="ads-workbench__center">
          <div className="ads-workbench__center-content">
            {centerPanel}
          </div>
          
          {/* Center Toast */}
          {centerToast && (
            <div className="ads-workbench__toast-container ads-workbench__toast-container--center">
              {centerToast}
            </div>
          )}
        </main>

        {/* RIGHT COLUMN */}
        <aside className={`ads-workbench__panel ads-workbench__right ${openDrawer === 'right' ? 'is-open' : ''}`}>
          <header className="ads-workbench__panel-header">
            <div>
              <p className="eyebrow">{rightEyebrow}</p>
              <h2>{rightTitle}</h2>
            </div>
            <button type="button" className="ads-workbench__close-action" onClick={closeDrawer}>
              Close
            </button>
          </header>
          <div className="ads-workbench__panel-content">
            {rightPanel}
          </div>
          
          {/* Right Sub-Panel */}
          {rightSubPanel && (
            <div className="ads-workbench__sub-panel ads-workbench__sub-panel--right">
              {rightSubPanel}
            </div>
          )}
          
          {/* Right Toast */}
          {rightToast && (
            <div className="ads-workbench__toast-container ads-workbench__toast-container--right">
              {rightToast}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

/**
 * SubPanel Helper Component
 */
export const WorkbenchSubPanel: React.FC<WorkbenchSubPanelProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;
  return (
    <div className="ads-sub-panel">
      <header className="ads-sub-panel__header">
        <h3>{title || 'Sub-Panel'}</h3>
        <button onClick={onClose} className="ads-sub-panel__close"><CloseIcon size={16} /></button>
      </header>
      <div className="ads-sub-panel__body">
        {children}
      </div>
    </div>
  );
};

/**
 * Toast Helper Component
 */
export const WorkbenchToast: React.FC<WorkbenchToastProps> = ({ message, onDismiss, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="ads-workbench-toast">
      <button onClick={onDismiss} className="ads-workbench-toast__x" aria-label="Close notification">
        <CloseIcon size={16} />
      </button>
      <div className="ads-workbench-toast__content">{message}</div>
      <button onClick={onDismiss} className="ads-workbench-toast__close">Dismiss</button>
    </div>
  );
};

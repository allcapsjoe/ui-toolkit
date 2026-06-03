import React, { useState } from 'react';
import { Panel } from '../Panel';
import { Button } from '../Button';
import { Workbench, WorkbenchSubPanel, WorkbenchToast } from '../Workbench';
import { ThemeSwitcher, type Skin } from '../ThemeSwitcher';

export interface MobilePanelLayoutProps {
  initialSkin?: Skin;
}

/**
 * MobilePanelLayout
 * 
 * An advanced dashboard layout featuring responsive panels (left, center, right),
 * toggleable overlay sub-panels, and contextual notifications/toasts.
 * Adapts beautifully to mobile viewports with drawer toggles.
 */
export const MobilePanelLayout: React.FC<MobilePanelLayoutProps> = ({ initialSkin = 'crt' }) => {
  const [skin, setSkin] = useState<Skin>(initialSkin);
  
  // State for sub-panels
  const [isLeftSubOpen, setIsLeftSubOpen] = useState(false);
  const [isRightSubOpen, setIsRightSubOpen] = useState(false);
  
  // State for toasts
  const [isLeftToastOpen, setIsLeftToastOpen] = useState(false);
  const [isRightToastOpen, setIsRightToastOpen] = useState(false);
  const [isCenterToastOpen, setIsCenterToastOpen] = useState(false);

  const leftPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Panel title="System Controls" eyebrow="Control Unit">
        <p style={{ margin: 0, fontSize: '0.85rem' }}>Configure primary controls, sub-panels, and toggle local notification streams.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Button variant="primary" onClick={() => setIsLeftSubOpen(true)}>Open Sub-Panel</Button>
          <Button variant="outline" onClick={() => setIsLeftToastOpen(true)}>Show Toast</Button>
        </div>
      </Panel>
      <div style={{ marginTop: '1rem' }}>
        <p style={{ margin: '0 0 0.25rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--ads-color-secondary)' }}>Left Panel Usage</p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ads-color-text-muted)' }}>
          This panel is dedicated to primary administration settings. Clicking "Open Sub-Panel" overlays a secondary configuration pane.
        </p>
      </div>
    </div>
  );

  const centerPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Panel title="Main Operations" eyebrow="Core Terminal">
        <p style={{ margin: 0, fontSize: '0.85rem' }}>This central stage holds key metrics, real-time analytics data logs, and options to live-swap the visual system contract.</p>
        
        <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid var(--ads-color-border)' }}>
          <p style={{ margin: '0 0 0.75rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--ads-color-secondary)' }}>Skin Swapping Engine</p>
          <ThemeSwitcher skin={skin} onChange={setSkin} />
        </div>

        <Button variant="primary" style={{ marginTop: '1.5rem' }} onClick={() => setIsCenterToastOpen(true)}>
          Trigger Viewport Toast
        </Button>
      </Panel>
      
      <div style={{ marginTop: '1rem' }}>
        <Panel title="Secondary Stream" eyebrow="Data Feed">
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Live telemetry feeds display logs downstream from standard mainframe connections.</p>
        </Panel>
      </div>
    </div>
  );

  const rightPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Panel title="Diagnostics" eyebrow="Analysis">
        <p style={{ margin: 0, fontSize: '0.85rem' }}>Run detailed subsystem analyzer checks and inspect telemetry diagnostics parameters.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          <Button variant="primary" onClick={() => setIsRightSubOpen(true)}>Open Sub-Panel</Button>
          <Button variant="outline" onClick={() => setIsRightToastOpen(true)}>Show Toast</Button>
        </div>
      </Panel>
      <div style={{ marginTop: '1rem' }}>
        <p style={{ margin: '0 0 0.25rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--ads-color-secondary)' }}>Right Panel Usage</p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ads-color-text-muted)' }}>
          Dedicated to analysis readouts. Context alerts slide up from the bottom when events occur.
        </p>
      </div>
    </div>
  );

  return (
    <div data-skin={skin} className="ads-mobile-panel-layout" style={{ background: 'var(--ads-color-bg)', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Workbench 
        mobileTitle="ADS WORKBENCH"
        mobileSubtitle={`${skin.toUpperCase()} ONLINE`}
        
        leftTitle="Primary Control"
        leftPanel={leftPanel}
        leftSubPanel={
          <WorkbenchSubPanel 
            isOpen={isLeftSubOpen} 
            onClose={() => setIsLeftSubOpen(false)}
            title="Sub-Control 01"
          >
            <p style={{ margin: 0, fontSize: '0.85rem' }}>Secondary control properties overlay. These sub-panels slide in from left/right edges to conserve viewport real estate.</p>
            <Button variant="outline" onClick={() => setIsLeftSubOpen(false)} style={{ marginTop: '1rem' }}>Close Sub-Panel</Button>
          </WorkbenchSubPanel>
        }
        leftToast={
          <WorkbenchToast 
            isOpen={isLeftToastOpen} 
            onDismiss={() => setIsLeftToastOpen(false)}
            message={
              <div>
                <strong>Left Panel Context</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem' }}>Operation signal received on Admin node.</p>
              </div>
            }
          />
        }

        centerPanel={centerPanel}
        centerToast={
          <WorkbenchToast 
            isOpen={isCenterToastOpen} 
            onDismiss={() => setIsCenterToastOpen(false)}
            message={
              <div>
                <strong>System Toast</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem' }}>This toast is locked to the bottom of the center layout viewport.</p>
              </div>
            }
          />
        }

        rightTitle="Secondary Control"
        rightPanel={rightPanel}
        rightSubPanel={
          <WorkbenchSubPanel 
            isOpen={isRightSubOpen} 
            onClose={() => setIsRightSubOpen(false)}
            title="Sub-Control 02"
          >
            <p style={{ margin: '0 0 1rem', fontSize: '0.85rem' }}>Diagnostics sub-panel properties listing:</p>
            <ul style={{ fontSize: '0.8rem', color: 'var(--ads-color-text-muted)', paddingLeft: '1.2rem', margin: 0 }}>
              <li>Node Latency Check: OK</li>
              <li>Database Handshake: PASS</li>
              <li>Core Temperature: 42°C</li>
            </ul>
            <Button variant="outline" onClick={() => setIsRightSubOpen(false)} style={{ marginTop: '1rem' }}>Close Sub-Panel</Button>
          </WorkbenchSubPanel>
        }
        rightToast={
          <WorkbenchToast 
            isOpen={isRightToastOpen} 
            onDismiss={() => setIsRightToastOpen(false)}
            message={
              <div>
                <strong>Right Panel Context</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem' }}>Diagnostics scanning initialized successfully.</p>
              </div>
            }
          />
        }
      />
    </div>
  );
};

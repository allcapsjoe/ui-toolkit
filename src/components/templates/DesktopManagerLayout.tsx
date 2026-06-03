import React, { useState, useEffect } from 'react';
import { Panel } from '../Panel';
import { Button } from '../Button';
import { Stack } from '../Stack';

/**
 * DesktopManagerLayout
 * 
 * A simulated vintage OS desktop environment incorporating shortcut icons, 
 * interactive panels, bottom taskbars, Start menus, and active clocks.
 */
export const DesktopManagerLayout: React.FC = () => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isMyComputerOpen, setIsMyComputerOpen] = useState(true);
  const [isShellOpen, setIsShellOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleShortcutClick = (app: 'computer' | 'shell') => {
    if (app === 'computer') setIsMyComputerOpen(true);
    if (app === 'shell') setIsShellOpen(true);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      background: 'var(--ads-color-bg)',
      overflow: 'hidden',
      fontFamily: 'var(--ads-font-mono)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Desktop Workspace Grid */}
      <div style={{ flex: 1, padding: '1rem', position: 'relative', display: 'flex', gap: '2rem' }}>
        {/* Desktop Shortcuts Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '80px', userSelect: 'none' }}>
          <div 
            onClick={() => handleShortcutClick('computer')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', textAlign: 'center' }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '4px' }}>💻</div>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', textTransform: 'uppercase' }}>My Computer</span>
          </div>

          <div 
            onClick={() => handleShortcutClick('shell')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', textAlign: 'center' }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '4px' }}>📟</div>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', textTransform: 'uppercase' }}>Console Shell</span>
          </div>
        </div>

        {/* Floating Windows Stack */}
        <div style={{ flex: 1, position: 'relative' }}>
          {isMyComputerOpen && (
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '320px', zIndex: 10 }}>
              <Panel 
                title="System Properties" 
                eyebrow="Config Manager"
                onClose={() => setIsMyComputerOpen(false)}
              >
                <Stack gap="0.5rem">
                  <p>Computer Type: ALLCAPS Core x86</p>
                  <p>Memory: 640 KB Base Ram</p>
                  <p>Subsystem: Operating Engine V1.0</p>
                  <Button onClick={() => setIsMyComputerOpen(false)} variant="primary" style={{ marginTop: '0.5rem' }}>OK</Button>
                </Stack>
              </Panel>
            </div>
          )}

          {isShellOpen && (
            <div style={{ position: 'absolute', top: '25%', left: '20%', width: '400px', zIndex: 11 }}>
              <Panel 
                title="Command console" 
                eyebrow="MS-DOS Shell"
                onClose={() => setIsShellOpen(false)}
              >
                <div style={{ background: '#000', color: '#0f0', padding: '1rem', fontFamily: 'monospace', minHeight: '150px' }}>
                  <p>Microsoft Windows 95 [Version 4.00.950]</p>
                  <p>(C)Copyright Microsoft Corp 1981-1995.</p>
                  <p style={{ marginTop: '1rem' }}>C:\WINDOWS&gt; _</p>
                </div>
              </Panel>
            </div>
          )}
        </div>
      </div>

      {/* Start Menu Overlay */}
      {isStartOpen && (
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '4px',
          width: '200px',
          background: 'var(--ads-color-surface)',
          border: '2px solid var(--ads-color-border)',
          zIndex: 500,
          boxShadow: 'var(--ads-glow)'
        }}>
          <div style={{ padding: '0.5rem', background: 'var(--ads-color-primary)', color: 'var(--ads-color-bg)', fontWeight: 'bold', textTransform: 'uppercase' }}>
            ALLCAPS 95
          </div>
          <Stack gap="0" style={{ padding: '4px' }}>
            <Button variant="ghost" style={{ justifyContent: 'flex-start', border: 'none', padding: '8px' }} onClick={() => { setIsMyComputerOpen(true); setIsStartOpen(false); }}>💻 MY COMPUTER</Button>
            <Button variant="ghost" style={{ justifyContent: 'flex-start', border: 'none', padding: '8px' }} onClick={() => { setIsShellOpen(true); setIsStartOpen(false); }}>📟 CONSOLE SHELL</Button>
            <hr style={{ margin: '4px 0', border: 'none', borderTop: '1px solid var(--ads-color-border)' }} />
            <Button variant="ghost" style={{ justifyContent: 'flex-start', border: 'none', padding: '8px' }} onClick={() => alert("Shutting down simulation...")}>🚪 SHUT DOWN...</Button>
          </Stack>
        </div>
      )}

      {/* Bottom Taskbar */}
      <footer style={{
        height: '3rem',
        background: 'var(--ads-color-surface)',
        borderTop: '2px solid var(--ads-color-border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.5rem',
        justifyContent: 'space-between',
        zIndex: 400,
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Button 
            variant="primary" 
            onClick={() => setIsStartOpen(prev => !prev)}
            style={{ fontWeight: 'bold', fontSize: '0.8rem', padding: '4px 12px' }}
          >
            🏁 START
          </Button>
          <div style={{ display: 'flex', gap: '4px' }}>
            {isMyComputerOpen && <span style={{ padding: '4px 8px', border: '1px solid var(--ads-color-border)', background: 'var(--ads-color-bg)', fontSize: '0.75rem' }}>🖥 SYS PROP</span>}
            {isShellOpen && <span style={{ padding: '4px 8px', border: '1px solid var(--ads-color-border)', background: 'var(--ads-color-bg)', fontSize: '0.75rem' }}>📟 COMMAND</span>}
          </div>
        </div>
        
        {/* System Clock Panel */}
        <div style={{
          border: '1px solid var(--ads-color-border)',
          background: 'var(--ads-color-bg)',
          padding: '4px 8px',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>🔊</span>
          <span>{time}</span>
        </div>
      </footer>
    </div>
  );
};

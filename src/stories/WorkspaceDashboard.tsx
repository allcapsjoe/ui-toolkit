import React, { useState, useEffect, useRef } from 'react';
import { useGlobals } from 'storybook/preview-api';
import { Button } from '../components/Button';
import { LEDIndicator } from '../components/LEDIndicator';
import { ProgressBar } from '../components/ProgressBar';
import { ThemeSwitcher, Skin } from '../components/ThemeSwitcher';
import { TextInput } from '../components/TextInput';
import { Slider } from '../components/Slider';
import { Toggle } from '../components/Toggle';
import { Badge } from '../components/Badge';
import { Alert } from '../components/Alert';
import { SelectDropdown } from '../components/SelectDropdown';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup } from '../components/RadioGroup';
import { Panel } from '../components/Panel';
import { RetroAudio } from '../utils/audio';

export const WorkspaceDashboard: React.FC = () => {
  // Sync skin state directly with Storybook global theme
  const [globals, updateGlobals] = useGlobals();
  const skin = (globals.theme as Skin) || 'captain';

  const [sliderVal, setSliderVal] = useState<number>(65);
  const [inputText, setInputText] = useState<string>('SECURE_COMM_CHANNEL');
  const [toggleVal, setToggleVal] = useState<boolean>(true);
  const [radioVal, setRadioVal] = useState<string>('med');
  const [ledColor, setLedColor] = useState<'success' | 'warning' | 'error' | 'primary'>('success');
  const [isBlinking, setIsBlinking] = useState<boolean>(true);
  const [customVars, setCustomVars] = useState<Record<string, string>>({});
  
  // Dynamic logger state
  const [systemLogs, setSystemLogs] = useState<string[]>([
    '[SYSTEM ONLINE] Ready for connection.',
    '[INFO] Select a theme switcher skin to shift UI design tokens.'
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to add timestamped logs to the feed
  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString();
    setSystemLogs(prev => [`[${time}] ${message}`, ...prev].slice(0, 5));
  };

  // Read computed CSS variables to display in the Token Inspector live
  useEffect(() => {
    if (containerRef.current) {
      const styles = getComputedStyle(containerRef.current);
      const vars = [
        '--ads-color-bg',
        '--ads-color-surface',
        '--ads-color-primary',
        '--ads-color-secondary',
        '--ads-color-text',
        '--ads-color-border',
        '--ads-radius',
        '--ads-font-mono'
      ];
      const result: Record<string, string> = {};
      vars.forEach(v => {
        result[v] = styles.getPropertyValue(v).trim() || 'not defined';
      });
      setCustomVars(result);
    }
  }, [skin]);

  const handleSkinChange = (newSkin: Skin) => {
    // Update global Storybook theme parameter
    updateGlobals({ theme: newSkin });
    RetroAudio.play('confirm');
    addLog(`Skin changed to: ${newSkin.toUpperCase()}`);
  };

  const toggleLedColor = () => {
    const colors: Array<'success' | 'warning' | 'error' | 'primary'> = ['success', 'warning', 'error', 'primary'];
    const nextIdx = (colors.indexOf(ledColor) + 1) % colors.length;
    const nextColor = colors[nextIdx];
    setLedColor(nextColor);
    RetroAudio.play('click');
    addLog(`LED color shifted to ${nextColor.toUpperCase()}`);
  };

  const handleBlinkingChange = (checked: boolean) => {
    setIsBlinking(checked);
    RetroAudio.play('click');
    addLog(`LED Blinking: ${checked ? 'ON' : 'OFF'}`);
  };

  const handleSliderChange = (val: number) => {
    setSliderVal(val);
    // Dynamic synth pitch based on slider position
    RetroAudio.playTone(180 + val * 2, 0.03, 'triangle', 0.05);
  };

  // Log slider value updates on drag release/change
  useEffect(() => {
    addLog(`Buffer ratio adjusted: ${sliderVal}%`);
  }, [sliderVal]);

  const handleRadioChange = (val: string) => {
    setRadioVal(val);
    RetroAudio.play('click');
    addLog(`Dial frequency band: ${val.toUpperCase()}`);
  };

  const handleExecute = () => {
    RetroAudio.play('chime');
    addLog('SYSTEM COMMAND 0x21 RUN: PORTAL RE-SYNCHRONIZED');
  };

  const handleReload = () => {
    RetroAudio.play('boot');
    setInputText('DEFAULT_RECOVERY_KEY');
    setSliderVal(65);
    setLedColor('success');
    setIsBlinking(true);
    setRadioVal('med');
    addLog('System cold reboot initiated.');
  };

  const handleAudioToggle = (checked: boolean) => {
    setToggleVal(checked);
    RetroAudio.setMute(!checked);
    RetroAudio.play('confirm');
    addLog(`Audio Engine: ${checked ? 'ENABLED' : 'MUTED'}`);
  };

  return (
    <div 
      ref={containerRef}
      data-skin={skin}
      style={{
        minHeight: '100vh',
        background: 'var(--ads-color-bg, #09090b)',
        color: 'var(--ads-color-text, #f4f4f5)',
        padding: '1.5rem',
        fontFamily: 'var(--ads-font-mono, monospace)',
        transition: 'background 0.3s, color 0.3s',
        boxSizing: 'border-box'
      }}
    >
      {/* Custom Styles block for Premium Feel */}
      <style>{`
        .ads-dashboard-card {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--ads-color-border) !important;
        }
        .ads-dashboard-card:hover {
          transform: translateY(-2px);
          border-color: var(--ads-color-primary) !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        }
        .ads-catalog-grid-box {
          background: rgba(0, 0, 0, 0.15);
          padding: 1.25rem;
          border: 1px solid var(--ads-color-border);
          border-radius: var(--ads-radius, 4px);
          transition: all 0.25s ease;
        }
        .ads-catalog-grid-box:hover {
          border-color: var(--ads-color-primary) !important;
          background: rgba(0, 0, 0, 0.25);
        }
        .ads-catalog-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ads-catalog-list-item {
          padding: 0.25rem 0;
          font-size: 0.8rem;
          color: var(--ads-color-text-muted, #a1a1aa);
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ads-catalog-list-item:hover {
          color: var(--ads-color-primary) !important;
          padding-left: 4px;
          cursor: pointer;
        }
        .ads-catalog-list-item::before {
          content: '•';
          color: var(--ads-color-text-muted);
        }
        .ads-catalog-list-item:hover::before {
          content: '>';
          color: var(--ads-color-primary);
        }
        .ads-glow-pulse {
          animation: ads-pulse 4s infinite ease-in-out;
        }
        @keyframes ads-pulse {
          0% { text-shadow: 0 0 2px rgba(255, 255, 255, 0.1); }
          50% { text-shadow: 0 0 8px var(--ads-color-primary); }
          100% { text-shadow: 0 0 2px rgba(255, 255, 255, 0.1); }
        }
      `}</style>

      {/* HUD Header Panel */}
      <div 
        style={{
          borderBottom: '1px solid var(--ads-color-border, #27272a)',
          paddingBottom: '1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--ads-color-secondary)', letterSpacing: '0.2em' }}>
            ALLCAPSJOE // WORKSPACE_PORTAL
          </div>
          <h1 className="ads-glow-pulse" style={{ fontSize: '2rem', margin: '0.5rem 0 0.25rem 0', fontWeight: '800', color: 'var(--ads-color-primary)' }}>
            CAPTAIN DECK
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--ads-color-text-muted)', margin: 0 }}>
            Unified UI Toolkit dashboard. Live previewing active system themes.
          </p>
        </div>

        {/* Real-time Theme Switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--ads-color-text-muted)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
            SELECT ACTIVE ENGINE SKIN:
          </span>
          <ThemeSwitcher skin={skin} onChange={handleSkinChange} />
        </div>
      </div>

      {/* 1. Interactive Live Sandbox (Full Width) */}
      <div style={{ marginBottom: '2rem' }}>
        <Panel className="ads-dashboard-card" title="🕹️ LIVE SANDBOX & TAC-PLAYGROUND" eyebrow="CONTROL BOARD">
          <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1.5rem' }}>
            Interact with live React components styled natively by the active skin variables. Buttons trigger synthesized clicks.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Input Controls Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  TEXT INPUT CHNL:
                </label>
                <TextInput 
                  value={inputText} 
                  onChange={(e) => {
                    setInputText(e.target.value);
                    if (e.target.value.length % 5 === 0) {
                      addLog(`Input field buffer update: "${e.target.value}"`);
                    }
                  }} 
                  placeholder="Enter system frequency..."
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  TACTILE CONTROLS (SLIDER):
                </label>
                <Slider 
                  min={0} 
                  max={100} 
                  value={sliderVal} 
                  onChange={handleSliderChange} 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  DIAL FREQUENCY (RADIO):
                </label>
                <RadioGroup
                  name="sandbox-radio"
                  value={radioVal}
                  onChange={handleRadioChange}
                  options={[
                    { value: 'low', label: 'LOW_BAND' },
                    { value: 'med', label: 'MED_BAND' },
                    { value: 'high', label: 'HIGH_BAND' }
                  ]}
                />
              </div>
            </div>

            {/* Output Feedback Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  LED INDICATOR (CLICK BULB TO SHIFT COLOR):
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.15)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--ads-color-border)' }}>
                  <LEDIndicator 
                    color={ledColor} 
                    isBlinking={isBlinking} 
                    label={`STATUS: ${ledColor}`} 
                    onClick={toggleLedColor}
                    style={{ cursor: 'pointer' }}
                  />
                  <div style={{ marginLeft: 'auto' }}>
                    <Toggle 
                      checked={isBlinking} 
                      onChange={handleBlinkingChange} 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  SYSTEM BUFFER RATIO:
                </label>
                <ProgressBar value={sliderVal} label="BUFFER_LOAD" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  SYSTEM LOG FEED:
                </label>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--ads-color-border)', fontSize: '0.72rem', minHeight: '94px', display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden' }}>
                  {systemLogs.map((log, idx) => (
                    <div key={idx} style={{ opacity: Math.max(0.3, 1 - idx * 0.18), whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: idx === 0 ? 'var(--ads-color-primary)' : 'var(--ads-color-text)' }}>
                      &gt; {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--ads-color-border)', paddingTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={handleExecute}>
              EXECUTE INT_0x21
            </Button>
            <Button variant="outline" onClick={handleReload}>
              RELOAD DECK
            </Button>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--ads-color-text-muted)' }}>AUDIO SYNTH:</span>
              <Toggle checked={toggleVal} onChange={handleAudioToggle} />
            </div>
          </div>
        </Panel>
      </div>

      {/* 2. Components Catalog Panel (Full Width) */}
      <div style={{ marginBottom: '2rem' }}>
        <Panel className="ads-dashboard-card" title="🧱 COMPONENT DIRECTORY INDEX" eyebrow="CATALOG">
          <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1.5rem' }}>
            Explore the 35 custom React components available in the <code>@allcapsjoe/ui-toolkit</code> package, fully styled via client-side CSS overrides.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div className="ads-catalog-grid-box">
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                🕹️ INPUTS & CONTROLS
              </div>
              <ul className="ads-catalog-list">
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> Button selected'); }}>Button</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> IconButton selected'); }}>IconButton</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> Slider selected'); }}>Slider</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> Toggle selected'); }}>Toggle</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> Checkbox selected'); }}>Checkbox</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> RadioGroup selected'); }}>RadioGroup</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> SelectDropdown selected'); }}>SelectDropdown</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> TextInput selected'); }}>TextInput</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Input -> TextArea selected'); }}>TextArea</li>
              </ul>
            </div>

            <div className="ads-catalog-grid-box">
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                📊 DATA & FEEDBACK
              </div>
              <ul className="ads-catalog-list">
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> DataTable selected'); }}>DataTable</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> ProgressBar selected'); }}>ProgressBar</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> LEDIndicator selected'); }}>LEDIndicator</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> Badge selected'); }}>Badge</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> Toast selected'); }}>Toast</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> Tooltip selected'); }}>Tooltip</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> Alert selected'); }}>Alert</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Data -> Spinner selected'); }}>Spinner</li>
              </ul>
            </div>

            <div className="ads-catalog-grid-box">
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                📟 HIGH-FLAVOR UI
              </div>
              <ul className="ads-catalog-list">
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> Terminal selected'); }}>Terminal</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> ScanlineOverlay selected'); }}>ScanlineOverlay</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> RetroModal selected'); }}>RetroModal</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> CodeBlock selected'); }}>CodeBlock</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> TreeNav selected'); }}>TreeNav</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: High Flavor -> ThemeSwitcher selected'); }}>ThemeSwitcher</li>
              </ul>
            </div>

            <div className="ads-catalog-grid-box">
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                🏛️ LAYOUTS & TEMPLATES
              </div>
              <ul className="ads-catalog-list">
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> AppShell selected'); }}>AppShell</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> Panel selected'); }}>Panel</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> Grid selected'); }}>Grid</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> Stack selected'); }}>Stack</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> Divider selected'); }}>Divider</li>
                <li className="ads-catalog-list-item" onClick={() => { RetroAudio.play('click'); addLog('Component Catalog: Layouts -> Workbench selected'); }}>Workbench</li>
              </ul>
            </div>
          </div>
        </Panel>
      </div>

      {/* 3. Templates Section (3 Columns) */}
      <div 
        style={{
          marginBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        <div className="ads-dashboard-card" style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>📂 Hacker Console</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            Telemetry system tracking CPU loads, memory layouts, and active threads in real-time.
          </p>
        </div>

        <div className="ads-dashboard-card" style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>📁 Desktop Manager</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            A virtual desktop simulator wrapping file managers, text editors, and terminal instances.
          </p>
        </div>

        <div className="ads-dashboard-card" style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>⚙️ Workbench Shell</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            Side navigation layout with sliding parameters drawers, code buffers, and live status reports.
          </p>
        </div>
      </div>

      {/* 4. Specification Card (Full Width) */}
      <div style={{ marginBottom: '2rem' }}>
        <Panel className="ads-dashboard-card" title="🔍 CSS VARIABLE TOKEN INSPECTOR" eyebrow="SPECIFICATION">
          <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1rem' }}>
            Real-time computed variables for the active skin. Shows how the style contract changes colors.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', background: '#000', padding: '1.25rem', borderRadius: '4px', border: '1px solid var(--ads-color-border)', fontSize: '0.78rem' }}>
            {Object.entries(customVars).map(([key, val]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace' }}>
                <span style={{ color: '#888' }}>{key}:</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {val.startsWith('#') || val.startsWith('rgba') || val.startsWith('rgb') ? (
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', background: val, border: '1px solid #555', borderRadius: '2px' }} />
                  ) : null}
                  <span style={{ color: 'var(--ads-color-primary)' }}>{val}</span>
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              THEME CONTRACT METADATA:
            </span>
            <Alert variant="info" style={{ margin: 0, fontSize: '0.75rem' }}>
              The <strong>ADS (ALLCAPS Design System)</strong> enforces strict isolation: all components look up custom properties. A skin overrides these properties dynamically to alter the style system.
            </Alert>
          </div>
        </Panel>
      </div>
    </div>
  );
};

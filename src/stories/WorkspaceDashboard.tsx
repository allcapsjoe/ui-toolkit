import React, { useState, useEffect, useRef } from 'react';
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
import { KeyboardLegend } from '../components/KeyboardLegend';
import { RadioGroup } from '../components/RadioGroup';
import { Panel } from '../components/Panel';
import { RetroAudio } from '../utils/audio';


export const WorkspaceDashboard: React.FC = () => {
  const [skin, setSkin] = useState<Skin>('captain');
  const [sliderVal, setSliderVal] = useState<number>(65);
  const [inputText, setInputText] = useState<string>('SECURE_COMM_CHANNEL');
  const [toggleVal, setToggleVal] = useState<boolean>(true);
  const [radioVal, setRadioVal] = useState<string>('med');
  const [ledColor, setLedColor] = useState<'success' | 'warning' | 'error' | 'primary'>('success');
  const [isBlinking, setIsBlinking] = useState<boolean>(true);
  const [customVars, setCustomVars] = useState<Record<string, string>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Read computed variables to display in the Token Inspector live
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

  const toggleLedColor = () => {
    const colors: Array<'success' | 'warning' | 'error' | 'primary'> = ['success', 'warning', 'error', 'primary'];
    const nextIdx = (colors.indexOf(ledColor) + 1) % colors.length;
    setLedColor(colors[nextIdx]);
  };

  return (
    <div 
      ref={containerRef}
      data-skin={skin}
      style={{
        minHeight: '100vh',
        background: 'var(--ads-color-bg, #09090b)',
        color: 'var(--ads-color-text, #f4f4f5)',
        padding: '2.5rem',
        fontFamily: 'var(--ads-font-mono, monospace)',
        transition: 'background 0.3s, color 0.3s',
        boxSizing: 'border-box'
      }}
    >
      {/* HUD Header Panel */}
      <div 
        style={{
          borderBottom: '1px solid var(--ads-color-border, #27272a)',
          paddingBottom: '1.5rem',
          marginBottom: '2.5rem',
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
          <h1 style={{ fontSize: '2rem', margin: '0.5rem 0 0.25rem 0', fontWeight: '800', color: 'var(--ads-color-primary)' }}>
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
          <ThemeSwitcher skin={skin} onChange={(s) => setSkin(s)} />
        </div>
      </div>

      {/* Main Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}
      >
        {/* Interactive Live Sandbox */}
        <Panel title="🕹️ LIVE SANDBOX & TAC-PLAYGROUND" eyebrow="CONTROL BOARD">
          <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1.5rem' }}>
            Interact with live React components styled natively by the active skin variables. Buttons trigger synthesized clicks.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Input Controls Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  TEXT INPUT CHNL:
                </label>
                <TextInput 
                  value={inputText} 
                  onChange={(e) => setInputText(e.target.value)} 
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
                  onChange={(val) => setSliderVal(val)} 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  DIAL FREQUENCY (RADIO):
                </label>
                <RadioGroup
                  name="sandbox-radio"
                  value={radioVal}
                  onChange={(val) => setRadioVal(val)}
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
                      onChange={(checked) => setIsBlinking(checked)} 
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
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--ads-color-border)', fontSize: '0.75rem' }}>
                  <div>&gt; SKIN: <span style={{ color: 'var(--ads-color-primary)', fontWeight: 'bold' }}>{skin.toUpperCase()}</span></div>
                  <div>&gt; TEXT: <span style={{ color: 'var(--ads-color-primary)' }}>{inputText || 'NULL'}</span></div>
                  <div>&gt; RANGE: <span style={{ color: 'var(--ads-color-primary)' }}>{sliderVal}% ({radioVal.toUpperCase()})</span></div>
                  <div>&gt; SYNTH: <span style={{ color: 'var(--ads-color-primary)' }}>{toggleVal ? 'ONLINE' : 'MUTED'}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--ads-color-border)', paddingTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
            <Button variant="primary" onClick={() => alert('Command Sent!')}>
              EXECUTE INT_0x21
            </Button>
            <Button variant="outline" onClick={() => setInputText('DEFAULT_RECOVERY_KEY')}>
              RELOAD DECK
            </Button>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--ads-color-text-muted)' }}>AUDIO SYNTH:</span>
              <Toggle checked={toggleVal} onChange={(checked) => {
                setToggleVal(checked);
                // Call global audio mute/unmute
                RetroAudio.setMute(!checked);
              }} />
            </div>
          </div>
        </Panel>

        {/* CSS Token Inspector */}
        <Panel title="🔍 CSS VARIABLE TOKEN INSPECTOR" eyebrow="SPECIFICATION">
          <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1rem' }}>
            Real-time computed variables for the active skin. Shows how the style contract changes colors.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: '#000', padding: '1rem', borderRadius: '4px', border: '1px solid var(--ads-color-border)', fontSize: '0.78rem' }}>
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

      {/* Components Catalog Panel */}
      <Panel title="🧱 COMPONENT DIRECTORY INDEX" eyebrow="CATALOG">
        <p style={{ fontSize: '0.85rem', color: 'var(--ads-color-text-muted)', marginBottom: '1.5rem' }}>
          Explore the 35 custom React components available in the <code>@allcapsjoe/ui-toolkit</code> package, fully styled via client-side CSS overrides.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              🕹️ INPUTS & CONTROLS
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--ads-color-text-muted)' }}>
              <li>• Button</li>
              <li>• IconButton</li>
              <li>• Slider</li>
              <li>• Toggle</li>
              <li>• Checkbox</li>
              <li>• RadioGroup</li>
              <li>• SelectDropdown</li>
              <li>• TextInput</li>
              <li>• TextArea</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              📊 DATA & FEEDBACK
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--ads-color-text-muted)' }}>
              <li>• DataTable</li>
              <li>• ProgressBar</li>
              <li>• LEDIndicator</li>
              <li>• Badge</li>
              <li>• Toast</li>
              <li>• Tooltip</li>
              <li>• Alert</li>
              <li>• Spinner</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              📟 HIGH-FLAVOR UI
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--ads-color-text-muted)' }}>
              <li>• Terminal</li>
              <li>• ScanlineOverlay</li>
              <li>• RetroModal</li>
              <li>• CodeBlock</li>
              <li>• TreeNav</li>
              <li>• ThemeSwitcher</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid var(--ads-color-border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--ads-color-primary)', borderBottom: '1px dashed var(--ads-color-border)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              🏛️ LAYOUTS & TEMPLATES
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--ads-color-text-muted)' }}>
              <li>• AppShell</li>
              <li>• Panel</li>
              <li>• Grid</li>
              <li>• Stack</li>
              <li>• Divider</li>
              <li>• Workbench</li>
            </ul>
          </div>
        </div>
      </Panel>

      {/* Templates Section */}
      <div 
        style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem'
        }}
      >
        <div style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', border: '1px solid var(--ads-color-border)', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>📂 Hacker Console</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            Telemetry system tracking CPU loads, memory layouts, and active threads in real-time.
          </p>
        </div>

        <div style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', border: '1px solid var(--ads-color-border)', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>📁 Desktop Manager</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            A virtual desktop simulator wrapping file managers, text editors, and terminal instances.
          </p>
        </div>

        <div style={{ background: 'var(--ads-color-surface)', padding: '1.25rem', border: '1px solid var(--ads-color-border)', borderRadius: 'var(--ads-radius)' }}>
          <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>⚙️ Workbench Shell</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--ads-color-text-muted)', margin: 0, lineHeight: '1.4' }}>
            Side navigation layout with sliding parameters drawers, code buffers, and live status reports.
          </p>
        </div>
      </div>

      {/* Keyboard legends */}
      <div style={{ marginTop: '2rem' }}>
        <KeyboardLegend 
          legends={[
            { keys: ['SKIN'], description: 'Toggle active themes UI variables' },
            { keys: ['SLIDER'], description: 'Adjust live progress buffer value' },
            { keys: ['LED'], description: 'Shift light statuses by clicking bulblet' },
            { keys: ['CTRL+S'], description: 'Submit sandbox logs to server' }
          ]}
        />
      </div>
    </div>
  );
};

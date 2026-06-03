import React, { useState } from 'react';
import { Panel } from '../Panel';
import { Tabs } from '../Tabs';
import { Slider } from '../Slider';
import { Toggle } from '../Toggle';
import { Checkbox } from '../Checkbox';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Stack } from '../Stack';

/**
 * ControlSettingsLayout
 * 
 * A system settings board configuration combining category tabs, 
 * slider adjustments, hardware toggles, and warnings alert boards.
 */
export const ControlSettingsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [audioVol, setAudioVol] = useState(50);
  const [securityOn, setSecurityOn] = useState(true);
  const [debugLog, setDebugLog] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const tabs = [
    { id: "general", label: "GENERAL" },
    { id: "audio", label: "AUDIO / SOUND" },
    { id: "security", label: "SECURITY SYSTEM" }
  ];

  const handleSave = () => {
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return (
    <div style={{ padding: '1rem', background: 'var(--ads-color-bg)', minHeight: '100vh', boxSizing: 'border-box', fontFamily: 'var(--ads-font-mono)' }}>
      <Stack gap="1rem">
        <header style={{ borderBottom: '2px solid var(--ads-color-primary)', paddingBottom: '0.5rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--ads-color-primary)', fontFamily: 'var(--ads-font-mono)' }}>SYSTEM PREFERENCES // CONFIG_BOARD</h1>
        </header>

        {isAlertOpen && (
          <Alert variant="info" title="SYSTEM SIGNAL">
            CHANGES APPLIED SUCCESSFULLY TO HARD MEMORY.
          </Alert>
        )}

        <Grid cols={12} gap="1rem">
          {/* Settings Tabs Selector Panel */}
          <div style={{ gridColumn: 'span 4' }}>
            <Panel title="Categories" eyebrow="SYS_CONF">
              <Tabs items={tabs} activeTab={activeTab} onTabChange={(id) => { setActiveTab(id); setIsAlertOpen(false); }} />
            </Panel>
          </div>

          {/* Configuration Form Panel */}
          <div style={{ gridColumn: 'span 8' }}>
            <Panel title={`${activeTab.toUpperCase()} PREFERENCES`} eyebrow="CONFIGURATION">
              <div style={{ minHeight: '240px' }}>
                {activeTab === 'general' && (
                  <Stack gap="1.25rem">
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ads-color-text)' }}>CONFIGURE BASE SYSTEM SETTINGS AND PREFERENCES.</p>
                    <Toggle 
                      label="ENABLE DIAGNOSTIC DEBUGGING LOG" 
                      checked={debugLog} 
                      onChange={() => setDebugLog(!debugLog)} 
                    />
                    <Checkbox 
                      label="CONFIRM AUTOMATIC DATA BACKUP ON SHUTDOWN" 
                      checked={true}
                      disabled
                    />
                  </Stack>
                )}

                {activeTab === 'audio' && (
                  <Stack gap="1.25rem">
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ads-color-text)' }}>VOLUME AND CHIME PARAMETER ADJUSTMENT PANEL.</p>
                    <Slider 
                      label="MASTER SOUND VOLUME LEVEL" 
                      value={audioVol} 
                      min={0} 
                      max={100} 
                      onChange={setAudioVol} 
                    />
                    <Toggle 
                      label="ENABLE INTERACTIVE SYSTEM CHIMES" 
                      checked={true} 
                      onChange={() => {}} 
                    />
                  </Stack>
                )}

                {activeTab === 'security' && (
                  <Stack gap="1.25rem">
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ads-color-text)' }}>ACCESS CODES AND NETWORK FIREWALL CONFIGURE.</p>
                    <Toggle 
                      label="ENABLE FIREWALL INTRUDER BLOCKER" 
                      checked={securityOn} 
                      onChange={() => setSecurityOn(!securityOn)} 
                    />
                    {!securityOn && (
                      <Alert variant="warning" title="SECURITY RISK">
                        FIREWALL TURNED OFF. SYSTEM EXPOSED TO PROTOCOL ATTACKS.
                      </Alert>
                    )}
                  </Stack>
                )}
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--ads-color-border)', margin: '1rem 0' }} />
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <Button variant="outline" onClick={() => setIsAlertOpen(false)}>RESET DEFAULT</Button>
                <Button variant="primary" onClick={handleSave}>SAVE CHANGES</Button>
              </div>
            </Panel>
          </div>
        </Grid>
      </Stack>
    </div>
  );
};

import React, { useState } from 'react';
import { Panel } from '../Panel';
import { Terminal } from '../Terminal';
import { DataTable, DataTableColumn } from '../DataTable';
import { ProgressBar } from '../ProgressBar';
import { Alert } from '../Alert';
import { Grid } from '../Grid';
import { Stack } from '../Stack';
import { Button } from '../Button';

export interface HackerConsoleLayoutProps {
  systemName?: string;
  initialLines?: string[];
}

/**
 * HackerConsoleLayout
 * 
 * An operations panel template featuring reactive terminals, split screens,
 * process lists, load telemetry, and shell inputs.
 */
export const HackerConsoleLayout: React.FC<HackerConsoleLayoutProps> = ({
  systemName = "SECURE_GATEWAY_V1",
  initialLines = [
    "LOGGING IN ON PORT 22...",
    "SECURE KEY EXCHANGE OK.",
    "READY."
  ]
}) => {
  const [lines, setLines] = useState<string[]>(initialLines);
  const [cmd, setCmd] = useState("");

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmd.trim()) return;
    const cleanCmd = cmd.trim().toUpperCase();
    let response = `COMMAND NOT FOUND: ${cleanCmd}`;
    if (cleanCmd === "HELP") {
      response = "AVAILABLE COMMANDS: HELP, STATUS, SCAN, CLEAR";
    } else if (cleanCmd === "STATUS") {
      response = "SYSTEM STATUS: NOMINAL. CPU LOAD 12%, UPLINK INTEGRITY 99.8%.";
    } else if (cleanCmd === "SCAN") {
      response = "SCANNING SUBSYSTEMS... ALL SECTORS CLEAR.";
    } else if (cleanCmd === "CLEAR") {
      setLines([]);
      setCmd("");
      return;
    }
    setLines(prev => [...prev, `> ${cmd}`, response]);
    setCmd("");
  };

  const tasksData = [
    { id: "0x0A", process: "SCAN_KERN", status: "OK", load: "12%" },
    { id: "0x0B", process: "SYNC_LINK", status: "SYNC", load: "4%" },
    { id: "0x0C", process: "MEM_DUMP", status: "WAIT", load: "0%" }
  ];

  const columns: DataTableColumn<{ id: string; process: string; status: string; load: string; }>[] = [
    { accessor: "id", header: "ADDR" },
    { accessor: "process", header: "PROCESS" },
    { accessor: "status", header: "STATUS" },
    { accessor: "load", header: "LOAD" }
  ];

  return (
    <div className="ads-hacker-console" style={{ padding: '1rem', background: 'var(--ads-color-bg)', minHeight: '100vh', boxSizing: 'border-box' }}>
      <Stack gap="1rem">
        <header style={{ borderBottom: '2px solid var(--ads-color-primary)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--ads-color-primary)', fontFamily: 'var(--ads-font-mono)' }}>CONSOLE MANAGER // {systemName}</h1>
          <Alert variant="info" title="SYSTEM STATUS" style={{ margin: 0, padding: '4px 8px' }}>
            NODE ONLINE
          </Alert>
        </header>

        <Grid cols={12} gap="1rem">
          {/* Main Terminal Column */}
          <div style={{ gridColumn: 'span 8' }}>
            <Panel title="Command Line Shell" eyebrow="TTY1">
              <Terminal lines={lines} title={`${systemName}_SHELL`} showCursor={true} />
              <form onSubmit={handleCommand} style={{ display: 'flex', marginTop: '0.5rem', border: '1px solid var(--ads-color-primary)' }}>
                <span style={{ color: 'var(--ads-color-primary)', padding: '0.5rem', userSelect: 'none', fontFamily: 'var(--ads-font-mono)' }}>&gt;</span>
                <input 
                  type="text" 
                  value={cmd}
                  onChange={(e) => setCmd(e.target.value)}
                  placeholder="TYPE 'HELP' AND PRESS ENTER..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--ads-color-primary)',
                    fontFamily: 'var(--ads-font-mono)',
                    outline: 'none',
                    padding: '0.5rem 0',
                    fontSize: '1rem',
                    textTransform: 'uppercase'
                  }}
                />
                <Button type="submit" variant="ghost" style={{ border: 'none', borderLeft: '1px solid var(--ads-color-primary)' }}>EXEC</Button>
              </form>
            </Panel>
          </div>

          {/* Subsystem Telemetry Column */}
          <div style={{ gridColumn: 'span 4' }}>
            <Stack gap="1rem">
              <Panel title="System Monitors" eyebrow="SYS_STAT">
                <Stack gap="0.75rem">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--ads-font-mono)' }}>
                      <span>Core Temperature</span>
                      <span>42°C</span>
                    </div>
                    <ProgressBar value={42} showPercentage={false} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--ads-font-mono)' }}>
                      <span>Memory Alloc</span>
                      <span>78%</span>
                    </div>
                    <ProgressBar value={78} showPercentage={false} variant="secondary" />
                  </div>
                </Stack>
              </Panel>

              <Panel title="Thread Manager" eyebrow="THREADS">
                <DataTable data={tasksData} columns={columns} />
              </Panel>
            </Stack>
          </div>
        </Grid>
      </Stack>
    </div>
  );
};

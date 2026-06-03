import React, { useState } from 'react';
import { Panel } from '../Panel';
import { TreeNav } from '../TreeNav';
import { DataTable } from '../DataTable';
import { FormGroup } from '../FormGroup';
import { TextInput } from '../TextInput';
import { SelectDropdown } from '../SelectDropdown';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Stack } from '../Stack';

/**
 * DatabaseRecordsLayout
 * 
 * A 3-pane data manager layout combining file tree navigation, 
 * filter controls, list tables, and record inspector panels.
 */
export const DatabaseRecordsLayout: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const treeItems = [
    { id: '1', label: 'ROOT_DIR', children: [
      { id: '2', label: 'USER_RECORDS' },
      { id: '3', label: 'SYS_RECORDS' }
    ]}
  ];

  const dbData = [
    { id: "01", name: "Joe Caps", role: "admin", status: "active" },
    { id: "02", name: "Ada Lovelace", role: "operator", status: "active" },
    { id: "03", name: "Alan Turing", role: "analyst", status: "offline" }
  ];

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "NAME" },
    { key: "role", header: "ROLE" },
    { key: "status", header: "STATUS" }
  ];

  const filteredData = dbData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === 'all' || item.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const selectOptions = [
    { value: 'all', label: 'All Roles' },
    { value: 'admin', label: 'Admin' },
    { value: 'operator', label: 'Operator' },
    { value: 'analyst', label: 'Analyst' }
  ];

  return (
    <div style={{ padding: '1rem', background: 'var(--ads-color-bg)', minHeight: '100vh', boxSizing: 'border-box', fontFamily: 'var(--ads-font-mono)' }}>
      <Grid cols={12} gap="1rem">
        {/* Left Sidebar Pane: Directories */}
        <div style={{ gridColumn: 'span 3' }}>
          <Panel title="Directories" eyebrow="FS_TREE">
            <TreeNav items={treeItems} onItemClick={(item) => setSelectedItem(null)} />
          </Panel>
        </div>

        {/* Central Data Workspace Grid */}
        <div style={{ gridColumn: 'span 6' }}>
          <Stack gap="1rem">
            {/* Filter controls panel */}
            <Panel title="Data Filters" eyebrow="QUERY_SYS">
              <Grid cols={2} gap="1rem">
                <FormGroup label="Search Name">
                  <TextInput 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ENTER NAME..."
                  />
                </FormGroup>
                <FormGroup label="Role Group">
                  <SelectDropdown 
                    options={selectOptions}
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                  />
                </FormGroup>
              </Grid>
            </Panel>

            {/* Core Data Table Panel */}
            <Panel title="Database Index" eyebrow="QUERY_RESULTS">
              <DataTable 
                data={filteredData} 
                columns={columns} 
                onRowClick={(row) => setSelectedItem(row)}
              />
              <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem', textTransform: 'uppercase', color: 'var(--ads-color-primary)' }}>
                * Click a row to load inspector profile.
              </p>
            </Panel>
          </Stack>
        </div>

        {/* Right Details Panel Pane */}
        <div style={{ gridColumn: 'span 3' }}>
          <Panel title="Inspector Panel" eyebrow="RECORD_DATA">
            {selectedItem ? (
              <Stack gap="0.75rem">
                <div>
                  <label style={{ fontSize: '0.7rem', opacity: 0.6, color: 'var(--ads-color-secondary)' }}>ID IDENTIFIER</label>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--ads-color-text)' }}>{selectedItem.id}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', opacity: 0.6, color: 'var(--ads-color-secondary)' }}>DISPLAY NAME</label>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--ads-color-text)' }}>{selectedItem.name}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', opacity: 0.6, color: 'var(--ads-color-secondary)' }}>ROLE GROUP</label>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--ads-color-text)' }}>{selectedItem.role.toUpperCase()}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', opacity: 0.6, color: 'var(--ads-color-secondary)' }}>STATUS SIGNALS</label>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--ads-color-text)' }}>{selectedItem.status.toUpperCase()}</p>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--ads-color-border)', margin: '0.5rem 0' }} />
                <Button variant="outline" isFullWidth onClick={() => setSelectedItem(null)}>CLOSE PROFILE</Button>
              </Stack>
            ) : (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', opacity: 0.5, border: '1px dashed var(--ads-color-border)', color: 'var(--ads-color-text-muted)' }}>
                NO ROW DATA LOADED.
              </div>
            )}
          </Panel>
        </div>
      </Grid>
    </div>
  );
};

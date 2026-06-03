import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import React from 'react';

const meta: Meta<typeof DataTable> = {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

interface MockData {
  id: string;
  module: string;
  status: string;
}

const data: MockData[] = [
  { id: '0x01', module: 'KERNEL', status: 'ACTIVE' },
  { id: '0x02', module: 'NETWORK', status: 'WAIT' },
  { id: '0x03', module: 'SECURITY', status: 'ERR' },
];

export const Default: StoryObj<typeof DataTable<MockData>> = {
  args: {
    data,
    columns: [
      { header: 'ID', accessor: 'id' },
      { header: 'MODULE', accessor: 'module' },
      { header: 'STATUS', accessor: 'status' },
    ],
  },
};

export const CustomRender: StoryObj<typeof DataTable<MockData>> = {
  args: {
    data,
    columns: [
      { header: 'ADDR', accessor: 'id' },
      { header: 'SYSTEM MODULE', accessor: 'module' },
      { 
        header: 'HEALTH', 
        accessor: (item) => (
          <span style={{ color: item.status === 'ACTIVE' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)' }}>
            {item.status}
          </span>
        ) 
      },
    ],
  },
};


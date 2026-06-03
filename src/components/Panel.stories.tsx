import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';
import React from 'react';

const meta: Meta<typeof Panel> = {
  title: 'Layout/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Primary: Story = {
  args: {
    eyebrow: 'System Status',
    title: 'All Systems Operational',
    children: <p>Link established. Monitoring core vitals.</p>,
    variant: 'primary',
  },
};

export const WithCloseButton: Story = {
  args: {
    eyebrow: 'Workbench',
    title: 'Radar Watch',
    children: <p>Detailed view of upcoming matches.</p>,
    onClose: () => alert('Close clicked'),
  },
};

export const Secondary: Story = {
  args: {
    eyebrow: 'Archive Logs',
    title: 'Historical Data v1995',
    children: <p>Viewing historical data from the vault...</p>,
    variant: 'secondary',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p>A simple floating panel without a header.</p>,
  },
};

export const FullHeight: Story = {
  args: {
    title: 'Console Output',
    children: <p>Scrolling log data...</p>,
    isFullHeight: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

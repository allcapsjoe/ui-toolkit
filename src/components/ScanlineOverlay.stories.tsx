import type { Meta, StoryObj } from '@storybook/react';
import { ScanlineOverlay } from './ScanlineOverlay';
import React from 'react';

const meta: Meta<typeof ScanlineOverlay> = {
  title: 'High-Flavor/ScanlineOverlay',
  component: ScanlineOverlay,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScanlineOverlay>;

export const Default: Story = {
  args: {
    opacity: 0.1,
    flicker: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', background: '#000', position: 'relative' }}>
        <div style={{ color: '#fff', padding: '2rem' }}>
          Scanlines are active on this black background.
        </div>
        <Story />
      </div>
    ),
  ],
};

import type { Meta, StoryObj } from '@storybook/react';
import { AppShell } from './AppShell';
import React from 'react';

const meta: Meta<typeof AppShell> = {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    header: <div style={{ padding: '1rem' }}><h1>ADS APP SHELL</h1></div>,
    sidebar: <div><h3>Navigation</h3><ul><li>Home</li><li>Status</li></ul></div>,
    children: <div><p>Main content area.</p></div>,
    footer: <div style={{ padding: '0.5rem' }}>System Ready.</div>,
  },
};

export const Minimal: Story = {
  args: {
    children: <div style={{ padding: '2rem' }}>Main content only, no header or sidebar.</div>,
  },
};

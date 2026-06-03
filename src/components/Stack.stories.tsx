import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import React from 'react';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;

export const Column: StoryObj<typeof Stack> = {
  args: {
    direction: 'column',
    gap: '1rem',
    children: (
      <>
        <div style={{ border: '1px solid var(--ads-color-border)', padding: '1rem' }}>Item 1</div>
        <div style={{ border: '1px solid var(--ads-color-border)', padding: '1rem' }}>Item 2</div>
        <div style={{ border: '1px solid var(--ads-color-border)', padding: '1rem' }}>Item 3</div>
      </>
    ),
  },
};

export const Row: StoryObj<typeof Stack> = {
  args: {
    direction: 'row',
    gap: '2rem',
    children: (
      <>
        <div style={{ border: '1px solid var(--ads-color-border)', padding: '1rem' }}>Box A</div>
        <div style={{ border: '1px solid var(--ads-color-border)', padding: '1rem' }}>Box B</div>
      </>
    ),
  },
};

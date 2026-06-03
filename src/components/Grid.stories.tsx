import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import React from 'react';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;

export const ThreeColumns: StoryObj<typeof Grid> = {
  args: {
    cols: 3,
    gap: '1rem',
    children: Array.from({ length: 6 }).map((_, i) => (
      <div key={i} style={{ border: '1px solid var(--ads-color-border)', padding: '2rem', textAlign: 'center' }}>
        CARD {i + 1}
      </div>
    )),
  },
};

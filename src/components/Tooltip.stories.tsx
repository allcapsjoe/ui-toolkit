import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    content: 'SYSTEM OVERRIDE DETECTED',
    children: <button>HOVER ME</button>,
  },
};

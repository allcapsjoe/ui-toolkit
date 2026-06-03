import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  args: {},
};

export const WithLabel: StoryObj<typeof Divider> = {
  args: {
    label: 'Section Break',
  },
};

export const Secondary: StoryObj<typeof Divider> = {
  args: {
    label: 'Critical Split',
    variant: 'secondary',
  },
};

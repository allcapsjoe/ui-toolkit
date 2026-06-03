import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

export const Primary: StoryObj<typeof Badge> = {
  args: {
    children: 'ACTIVE',
  },
};

export const Secondary: StoryObj<typeof Badge> = {
  args: {
    children: 'ALERT',
    variant: 'secondary',
  },
};

export const Outline: StoryObj<typeof Badge> = {
  args: {
    children: 'DEBUG',
    variant: 'outline',
  },
};

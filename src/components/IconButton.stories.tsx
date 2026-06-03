import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Input/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    icon: '💾',
  },
};

export const Outline: StoryObj<typeof IconButton> = {
  args: {
    icon: '⚙️',
    variant: 'outline',
  },
};

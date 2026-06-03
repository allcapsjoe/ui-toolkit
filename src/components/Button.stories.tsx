import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Input/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'EXECUTE',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'CANCEL',
    variant: 'outline',
  },
};

export const Large: Story = {
  args: {
    children: 'BIG BUTTON',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'LOCKED',
    disabled: true,
  },
};

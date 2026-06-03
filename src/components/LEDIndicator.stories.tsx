import type { Meta, StoryObj } from '@storybook/react';
import { LEDIndicator } from './LEDIndicator';

const meta: Meta<typeof LEDIndicator> = {
  title: 'Feedback/LEDIndicator',
  component: LEDIndicator,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isBlinking: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LEDIndicator>;

export const PrimaryOn: Story = {
  args: {
    label: 'SYSTEM ONLINE',
    color: 'primary',
    isBlinking: false,
  },
};

export const BlinkingWarning: Story = {
  args: {
    label: 'DISK ACCESS',
    color: 'warning',
    isBlinking: true,
  },
};

export const AlarmError: Story = {
  args: {
    label: 'CORE OVERHEAT WARNING',
    color: 'error',
    isBlinking: true,
    size: 'lg',
  },
};

export const SuccessSignals: Story = {
  args: {
    label: 'LINK SECURE',
    color: 'success',
    isBlinking: false,
  },
};

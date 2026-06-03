import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from './Terminal';

const meta: Meta<typeof Terminal> = {
  title: 'High-Flavor/Terminal',
  component: Terminal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  args: {
    lines: [
      'INITIALIZING SYSTEM...',
      'LOADING CORE MODULES...',
      'NETWORK STATUS: CONNECTED',
      'READY FOR COMMAND.',
    ],
  },
};

export const Animated: Story = {
  args: {
    title: 'SEQUENTIAL_BOOT',
    lines: [
      'STEP 1: POWER ON',
      'STEP 2: BIOS CHECK',
      'STEP 3: OS LOAD',
      'COMPLETE.',
    ],
    typeSpeed: 100,
  },
};

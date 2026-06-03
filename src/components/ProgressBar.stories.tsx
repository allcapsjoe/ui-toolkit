import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Data/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Segmented: Story = {
  args: {
    value: 65,
    label: 'Downloading Data',
    isSegmented: true,
  },
};

export const Smooth: Story = {
  args: {
    value: 40,
    label: 'Neural Link Sync',
    isSegmented: false,
    variant: 'secondary',
  },
};

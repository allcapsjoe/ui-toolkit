import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardLegend } from './KeyboardLegend';

const meta: Meta<typeof KeyboardLegend> = {
  title: 'Navigation/KeyboardLegend',
  component: KeyboardLegend,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'compact'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyboardLegend>;

const sampleItems = [
  { key: 'F1', action: 'Help' },
  { key: 'F3', action: 'Files' },
  { key: 'F5', action: 'Execute' },
  { key: 'F10', action: 'Exit' },
  { key: 'ESC', action: 'Cancel' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
  },
};

export const AccentBar: Story = {
  args: {
    items: sampleItems,
    variant: 'accent',
  },
};

export const CompactLegend: Story = {
  args: {
    items: sampleItems,
    variant: 'compact',
  },
};

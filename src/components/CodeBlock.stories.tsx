import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'Data/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof CodeBlock> = {
  args: {
    title: 'sys.log',
    language: 'log',
    code: '08:00:01 - KERNEL STARTED\n08:00:05 - NETWORK ATTACHED\n08:00:10 - ALL SYSTEMS GO',
  },
};

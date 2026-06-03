import type { Meta, StoryObj } from '@storybook/react';
import { TreeNav } from './TreeNav';

const meta: Meta<typeof TreeNav> = {
  title: 'Navigation/TreeNav',
  component: TreeNav,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof TreeNav> = {
  args: {
    items: [
      { id: '1', label: 'C:', children: [
        { id: '2', label: 'WINDOWS' },
        { id: '3', label: 'APPS', children: [{ id: '4', label: 'GAME.EXE' }] }
      ]}
    ],
  },
};

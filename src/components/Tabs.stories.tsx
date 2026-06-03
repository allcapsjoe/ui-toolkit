import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import React, { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

export const Interactive: StoryObj<typeof Tabs> = {
  render: (args) => {
    const [active, setActive] = useState('1');
    return <Tabs {...args} activeTab={active} onTabChange={setActive} />;
  },
  args: {
    items: [
      { id: '1', label: 'OVERVIEW' },
      { id: '2', label: 'NETWORK' },
      { id: '3', label: 'SYSTEM' },
    ],
  },
};

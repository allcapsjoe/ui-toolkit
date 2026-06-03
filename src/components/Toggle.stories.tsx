import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import React, { useState } from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Input/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;

export const Interactive: StoryObj<typeof Toggle> = {
  render: (args) => {
    const [val, setVal] = useState(false);
    return <Toggle {...args} checked={val} onChange={setVal} />;
  },
  args: {
    label: 'SYSTEM OVERRIDE',
  },
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: {
    label: 'LOCKED CONTROL',
    checked: true,
    disabled: true,
  },
};

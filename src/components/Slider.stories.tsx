import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import React, { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Input/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

export const Interactive: StoryObj<typeof Slider> = {
  render: (args) => {
    const [val, setVal] = useState(50);
    return <Slider {...args} value={val} onChange={setVal} />;
  },
  args: {
    label: 'SIGNAL INTENSITY',
  },
};

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Input/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;

const sampleOptions = [
  { value: 'low', label: 'Low Resolution (CRT)' },
  { value: 'med', label: 'Medium Resolution' },
  { value: 'high', label: 'High Resolution (VGA)' },
];

export const Vertical: React.FC = () => {
  const [val, setVal] = useState('low');
  return (
    <RadioGroup
      name="resolution"
      label="Monitor Display Mode"
      options={sampleOptions}
      value={val}
      onChange={setVal}
    />
  );
};

export const Horizontal: React.FC = () => {
  const [val, setVal] = useState('med');
  return (
    <RadioGroup
      name="resolution_horiz"
      label="Choose Graphics Quality"
      direction="horizontal"
      options={sampleOptions}
      value={val}
      onChange={setVal}
    />
  );
};

export const WithDisabledOption: React.FC = () => {
  const [val, setVal] = useState('low');
  const optionsWithDisabled = [
    ...sampleOptions,
    { value: 'super-vga', label: 'Super SVGA (Locked)', disabled: true }
  ];
  return (
    <RadioGroup
      name="resolution_disabled"
      label="Graphics Driver Selector"
      options={optionsWithDisabled}
      value={val}
      onChange={setVal}
    />
  );
};

import type { Meta, StoryObj } from '@storybook/react';
import { RetroModal } from './RetroModal';
import { Button } from './Button';
import React from 'react';

const meta: Meta<typeof RetroModal> = {
  title: 'High-Flavor/RetroModal',
  component: RetroModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RetroModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'SYSTEM ALERT',
    children: <p>Critical failure detected in sector 7G.</p>,
    actions: <Button variant="primary">ACKNOWLEDGE</Button>,
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    isOpen: true,
    title: 'FORMAT DRIVE?',
    variant: 'secondary',
    children: <p>All data will be lost forever. Proceed?</p>,
    actions: (
      <>
        <Button variant="outline">CANCEL</Button>
        <Button>PROCEED</Button>
      </>
    ),
    onClose: () => {},
  },
};

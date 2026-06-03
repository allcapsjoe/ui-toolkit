import type { Meta, StoryObj } from '@storybook/react';
import { ToastContainer } from './Toast';
import React from 'react';

const meta: Meta<typeof ToastContainer> = {
  title: 'Feedback/ToastContainer',
  component: ToastContainer,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ToastContainer> = {
  args: {
    toasts: [
      { id: '1', message: 'CONNECTION ESTABLISHED', type: 'info' },
      { id: '2', message: 'CRITICAL ERROR: CORE TEMP', type: 'error' },
    ],
  },
};

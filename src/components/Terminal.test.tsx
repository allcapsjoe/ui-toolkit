import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Terminal } from './Terminal';

describe('Terminal Component', () => {
  it('renders lines of text', () => {
    const lines = ['Booting...', 'Kernel loaded'];
    render(<Terminal lines={lines} />);
    expect(screen.getByText('Booting...')).toBeInTheDocument();
    expect(screen.getByText('Kernel loaded')).toBeInTheDocument();
  });

  it('renders with a title', () => {
    render(<Terminal lines={[]} title="CUSTOM_SHELL" />);
    expect(screen.getByText('CUSTOM_SHELL')).toBeInTheDocument();
  });

  it('shows a cursor by default', () => {
    const { container } = render(<Terminal lines={['test']} />);
    const cursor = container.querySelector('.ads-terminal__cursor');
    expect(cursor).toBeInTheDocument();
  });
});

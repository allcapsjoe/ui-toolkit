import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Panel } from './Panel';

describe('Panel Component', () => {
  it('renders with eyebrow and title', () => {
    render(<Panel eyebrow="Section" title="Test Panel">Content</Panel>);
    expect(screen.getByText('Section')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /test panel/i })).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders onClose button', () => {
    const handleClose = vi.fn();
    render(<Panel title="Closable" onClose={handleClose}>Content</Panel>);
    const closeBtn = screen.getByRole('button', { name: /close panel/i });
    closeBtn.click();
    expect(handleClose).toHaveBeenCalled();
  });

  it('applies variant styling', () => {
    const { container } = render(<Panel variant="secondary">Content</Panel>);
    const panel = container.firstChild;
    expect(panel).toHaveClass('ads-panel--secondary');
  });
});

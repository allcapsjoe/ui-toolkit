import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Workbench } from './Workbench';
import '@testing-library/jest-dom';

test('renders workbench and its appbar buttons with icons', () => {
  render(
    <Workbench
      leftPanel={<div>Left Panel</div>}
      centerPanel={<div>Center Panel</div>}
      rightPanel={<div>Right Panel</div>}
      mobileTitle="Test Workbench"
    />
  );

  const leftButton = screen.getByLabelText('Toggle Left Panel');
  const rightButton = screen.getByLabelText('Toggle Right Panel');

  expect(leftButton).toBeInTheDocument();
  expect(rightButton).toBeInTheDocument();

  // Inspect that the buttons contain SVG elements
  const leftSvg = leftButton.querySelector('svg');
  const rightSvg = rightButton.querySelector('svg');

  expect(leftSvg).toBeInTheDocument();
  expect(rightSvg).toBeInTheDocument();
});

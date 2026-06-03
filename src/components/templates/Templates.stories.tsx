import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HackerConsoleLayout } from './HackerConsoleLayout';
import { DesktopManagerLayout } from './DesktopManagerLayout';
import { DatabaseRecordsLayout } from './DatabaseRecordsLayout';
import { ControlSettingsLayout } from './ControlSettingsLayout';
import { SetupWizardLayout } from './SetupWizardLayout';
import { WorkbenchLayout } from './WorkbenchLayout';

const meta: Meta = {
  title: 'Layout Templates',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const HackerConsole: StoryObj = {
  render: () => <HackerConsoleLayout />,
};

export const DesktopManager: StoryObj = {
  render: () => <DesktopManagerLayout />,
};

export const DatabaseRecords: StoryObj = {
  render: () => <DatabaseRecordsLayout />,
};

export const ControlSettings: StoryObj = {
  render: () => <ControlSettingsLayout />,
};

export const SetupWizard: StoryObj = {
  render: () => <SetupWizardLayout />,
};

export const Workbench: StoryObj = {
  render: () => <WorkbenchLayout />,
};



import type { Preview } from "@storybook/react";
import { themes } from 'storybook/theming';
import '../captain/captain.css';
import '../crt/crt.css';
import '../win95/win95.css';
import '../cyberpunk/cyberpunk.css';
import '../eink/eink.css';
import '../mainframe/mainframe.css';
import '../retro/retro.css';
import '../neon/neon.css';
import '../archive/archive.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'captain',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'captain', icon: 'mirror', title: 'Captain (Dark)' },
          { value: 'crt', icon: 'monitor', title: 'CRT' },
          { value: 'win95', icon: 'window', title: 'Win95' },
          { value: 'cyberpunk', icon: 'lightning', title: 'Cyberpunk' },
          { value: 'eink', icon: 'mirror', title: 'E-Ink' },
          { value: 'mainframe', icon: 'code', title: 'Mainframe' },
          { value: 'retro', icon: 'clock', title: 'Retro' },
          { value: 'neon', icon: 'flash', title: 'Neon' },
          { value: 'archive', icon: 'book', title: 'Archive' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isFullscreen = context.parameters.layout === 'fullscreen';
      return (
        <>
          <style>{`
            body {
              margin: 0 !important;
              padding: 0 !important;
              background-color: #0d1117 !important;
            }
          `}</style>
          <div 
            data-skin={context.globals.theme}
            style={{
              minHeight: '100vh',
              background: 'var(--ads-color-bg)',
              color: 'var(--ads-color-text)',
              padding: isFullscreen ? '0' : '1.5rem',
              boxSizing: 'border-box'
            }}
          >
            <Story />
          </div>
        </>
      );
    },
  ],
};

export default preview;


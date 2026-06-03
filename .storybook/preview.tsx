import type { Preview } from "@storybook/react";
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
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'crt',
      toolbar: {
        icon: 'circlehollow',
        items: [
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
    (Story, context) => (
      <div data-skin={context.globals.theme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;


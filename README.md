# @allcapsjoe/ui-toolkit

A vintage, retro, and high-flavor UI Toolkit for React. This package contains **35 coded components**, **8 themes/skins**, and **5 layouts** designed for rapid prototyping of retro dashboards, hacking terminals, BIOS screens, and pixel-art utilities.

---

## 🎨 Themes Included

Wrap your application or specific sections in any of the 8 theme wrappers to instantly apply the visual design system:

| Theme Wrapper | Aesthetic Description |
| :--- | :--- |
| `<CrtLayout>` | Phosphor green terminal monitor with flicker overlays. |
| `<Win95Layout>` | Classic Microsoft Windows 95 gray bevel border aesthetics. |
| `<CyberpunkLayout>` | Cyberpunk neon-green and high-contrast visuals. |
| `<EinkLayout>` | Paper-like e-ink black-and-white high contrast screen. |
| `<MainframeLayout>` | IBM mainframe-style dark terminal screen. |
| `<RetroLayout>` | 1970s warm cream, solar red, and tangerine bubble-art. |
| `<NeonLayout>` | Futuristic neon glow space-cockpit backdrop. |
| `<ArchiveLayout>` | Warm vintage library archive terminal paper styles. |

---

## 🚀 Installation & Setup

1. **Install the package** (from your private Git repo or local directory):
   ```bash
   npm install @allcapsjoe/ui-toolkit
   ```

2. **Wrap your app** and **import the theme styles**:
   ```tsx
   import { CrtLayout, Button, Terminal } from '@allcapsjoe/ui-toolkit';
   
   // Import CSS for the skin you're using
   import '@allcapsjoe/ui-toolkit/crt/css';

   function App() {
     return (
       <CrtLayout fontScale={1.1}>
         <Button onClick={() => console.log("System Initialized")}>
           BOOT SYSTEM
         </Button>
         <Terminal lines={["LINK STABLE...", "READY."]} />
       </CrtLayout>
     );
   }
   ```

---

## 🧱 Coded Components

The toolkit exports all components directly from the root path:

* **Structure & Layout**: `AppShell`, `Panel`, `Stack`, `Grid`, `Divider`.
* **Form Inputs**: `Button`, `IconButton`, `Checkbox`, `RadioGroup` *(new!)*, `TextInput`, `TextArea`, `SelectDropdown`, `Slider`, `Toggle`.
* **High-Flavor & Display**: `Terminal`, `RetroModal`, `ScanlineOverlay`, `Badge`, `ProgressBar`, `LEDIndicator` *(new!)*, `KeyboardLegend` *(new!)*, `CodeBlock`, `DataTable`, `Tabs`, `Toast`, `Tooltip`, `TreeNav`, `Alert`, `Spinner`.

---

## 🔉 Interactive Audio Synthesizer

The toolkit contains an integrated **RetroAudio** helper that synthesizes 8-bit sound effects directly in the browser (no asset downloads required!). 
Components like `<Button>` have click sound effects enabled by default.

```tsx
import { RetroAudio } from '@allcapsjoe/ui-toolkit';

// Play sound effects manually
RetroAudio.play('click');
RetroAudio.play('confirm');
RetroAudio.play('error');
RetroAudio.play('boot');
RetroAudio.play('chime');

// Mute sound effects globally
RetroAudio.setMute(true);
```

---

## 📟 High-Level Templates

We provide 5 ready-to-use page layouts built entirely with the components:

1. **`HackerConsoleLayout`**: An operations telemetry board with input shells.
2. **`DesktopManagerLayout`**: Win95-style workspace window layout.
3. **`DatabaseRecordsLayout`**: 3-pane database explorer with sidebar file trees.
4. **`ControlSettingsLayout`**: Tabbed options panel with toggles, sliders, and audio parameters.
5. **`SetupWizardLayout`**: Multi-step configuration helper showing agreement logs and progress sliders.

---

## 🛠 Development Workflow

* Run Storybook: `npm run storybook`
* Run Tests: `npm run test`



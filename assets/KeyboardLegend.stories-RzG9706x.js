import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{rt as n,t as r}from"./iframe-ClHDfdvo.js";var i,a,o,s=e((()=>{i=t(n(),1),a=r(),o=i.forwardRef(({className:e,items:t,variant:n=`default`,style:r,...i},o)=>(0,a.jsx)(`div`,{ref:o,style:{display:`flex`,flexWrap:`wrap`,gap:n===`compact`?`0.75rem`:`1.5rem`,padding:n===`compact`?`0.25rem 0.5rem`:`0.5rem 1rem`,background:n===`accent`?`var(--ads-color-primary, #39ff14)`:`var(--ads-color-surface, #0d150d)`,color:n===`accent`?`var(--ads-color-bg, #000000)`:`var(--ads-color-text, #ffffff)`,borderTop:n===`accent`?`none`:`1px solid var(--ads-color-border, var(--ads-color-primary))`,borderBottom:n===`accent`?`none`:`1px solid var(--ads-color-border, var(--ads-color-primary))`,fontFamily:`var(--ads-font-mono, monospace)`,fontSize:`0.75rem`,textTransform:`uppercase`,boxSizing:`border-box`,...r},className:`ads-keyboard-legend ads-keyboard-legend--${n} ${e||``}`,...i,children:t.map((e,t)=>(0,a.jsxs)(`div`,{className:`ads-keyboard-legend__item`,style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,a.jsx)(`span`,{className:`ads-keyboard-legend__key`,style:{fontWeight:`bold`,color:n===`accent`?`var(--ads-color-bg, #000000)`:`var(--ads-color-primary, #39ff14)`,background:n===`accent`?`rgba(0, 0, 0, 0.1)`:`rgba(255, 255, 255, 0.05)`,padding:`1px 4px`,border:n===`accent`?`1px solid var(--ads-color-bg)`:`1px solid var(--ads-color-border)`,borderRadius:`2px`},children:e.key}),(0,a.jsx)(`span`,{className:`ads-keyboard-legend__action`,style:{opacity:n===`accent`?.9:.7},children:e.action})]},t))})),o.displayName=`KeyboardLegend`,o.__docgenInfo={description:`KeyboardLegend

Displays retro keyboard shortcuts/hotkeys legend at the bottom of screens or panels.
Commonly seen in BIOS, MS-DOS, or terminal utilities.`,methods:[],displayName:`KeyboardLegend`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`LegendItem`}],raw:`LegendItem[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'accent' | 'compact'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'compact'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}}}})),c,l,u,d,f,p;e((()=>{s(),c={title:`Navigation/KeyboardLegend`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`accent`,`compact`]}}},l=[{key:`F1`,action:`Help`},{key:`F3`,action:`Files`},{key:`F5`,action:`Execute`},{key:`F10`,action:`Exit`},{key:`ESC`,action:`Cancel`}],u={args:{items:l,variant:`default`}},d={args:{items:l,variant:`accent`}},f={args:{items:l,variant:`compact`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'default'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'accent'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'compact'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`AccentBar`,`CompactLegend`]}))();export{d as AccentBar,f as CompactLegend,u as Default,p as __namedExportsOrder,c as default};
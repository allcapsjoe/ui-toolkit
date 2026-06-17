import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-ClHDfdvo.js";var r,i,a=e((()=>{t(),r=n(),i=({opacity:e=.1,flicker:t=!0})=>(0,r.jsxs)(`div`,{className:`ads-scanline-overlay`,style:{position:`fixed`,inset:0,pointerEvents:`none`,zIndex:9999,overflow:`hidden`},children:[(0,r.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,${e}) 2px, rgba(0,0,0,${e}) 4px)`,zIndex:1}}),t&&(0,r.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(18, 16, 16, 0.02)`,animation:`ads-flicker 0.15s infinite`,zIndex:2}}),(0,r.jsx)(`style`,{children:`
        @keyframes ads-flicker {
          0% { opacity: 1; } 50% { opacity: 0.95; } 100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-scanline-overlay div {
            animation: none !important;
          }
        }
      `})]}),i.__docgenInfo={description:`ScanlineOverlay

A decorative component that adds CRT-style scanlines and noise.
Purely aesthetic, pointer-events are disabled so it doesn't block interactions.`,methods:[],displayName:`ScanlineOverlay`,props:{opacity:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0.1`,computed:!1}},flicker:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),o,s,c,l;e((()=>{a(),t(),o=n(),s={title:`High-Flavor/ScanlineOverlay`,component:i,tags:[`autodocs`]},c={args:{opacity:.1,flicker:!0},decorators:[e=>(0,o.jsxs)(`div`,{style:{height:`300px`,background:`#000`,position:`relative`},children:[(0,o.jsx)(`div`,{style:{color:`#fff`,padding:`2rem`},children:`Scanlines are active on this black background.`}),(0,o.jsx)(e,{})]})]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    opacity: 0.1,
    flicker: true
  },
  decorators: [Story => <div style={{
    height: '300px',
    background: '#000',
    position: 'relative'
  }}>
        <div style={{
      color: '#fff',
      padding: '2rem'
    }}>
          Scanlines are active on this black background.
        </div>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};
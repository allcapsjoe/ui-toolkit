import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-BZU-yuso.js";var r,i,a=e((()=>{t(),r=n(),i=({toasts:e})=>(0,r.jsxs)(`div`,{className:`ads-toast-container`,style:{position:`fixed`,bottom:`1rem`,right:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.5rem`,zIndex:3e3},children:[e.map(e=>(0,r.jsx)(`div`,{className:`ads-toast ads-toast--${e.type||`info`}`,style:{padding:`0.75rem 1.5rem`,fontFamily:`var(--ads-font-mono)`,textTransform:`uppercase`,fontSize:`0.8rem`,animation:`ads-slide-in 0.3s ease-out`},children:e.message},e.id)),(0,r.jsx)(`style`,{children:`
        /* Base Toast styling fallback */
        .ads-toast {
          background: var(--ads-color-primary, #000);
          color: var(--ads-color-bg, #fff);
          border: 1px solid var(--ads-color-border, #000);
          box-shadow: var(--ads-glow, none);
        }
        .ads-toast--error {
          background: var(--ads-color-secondary, #ff0000);
          color: var(--ads-color-bg, #fff);
        }

        /* Skin specific readability overrides */
        [data-skin="crt"] .ads-toast {
          background: var(--ads-color-bg) !important;
          color: var(--ads-color-primary) !important;
          border: 1px solid var(--ads-color-primary) !important;
          text-shadow: var(--ads-glow);
          box-shadow: var(--ads-glow);
        }
        [data-skin="crt"] .ads-toast--error {
          color: var(--ads-color-secondary) !important;
          border-color: var(--ads-color-secondary) !important;
        }

        [data-skin="win95"] .ads-toast {
          background: var(--ads-color-bg) !important;
          color: var(--ads-color-text) !important;
          border: 1px solid #000 !important;
          box-shadow: inset 1px 1px #fff, 1px 1px #808080 !important;
        }
        [data-skin="win95"] .ads-toast--error {
          border-color: #ff0000 !important;
        }

        [data-skin="cyberpunk"] .ads-toast {
          background: #000000 !important;
          color: var(--ads-color-primary) !important;
          border: 2px solid var(--ads-color-primary) !important;
          box-shadow: var(--ads-glow);
        }
        [data-skin="cyberpunk"] .ads-toast--error {
          color: var(--ads-color-secondary) !important;
          border-color: var(--ads-color-secondary) !important;
        }

        [data-skin="eink"] .ads-toast {
          background: #000000 !important;
          color: #ffffff !important;
          border: 2px solid #000000 !important;
          box-shadow: 4px 4px 0px #000000 !important;
        }

        [data-skin="mainframe"] .ads-toast {
          background: #000000 !important;
          color: #ffffff !important;
          border: 1px solid #ffffff !important;
        }

        [data-skin="retro"] .ads-toast {
          background: rgba(10, 7, 5, 0.95) !important;
          color: var(--ads-color-text) !important;
          border: 2px solid var(--ads-color-primary) !important;
        }
        [data-skin="retro"] .ads-toast--error {
          border-color: var(--ads-color-secondary) !important;
        }

        [data-skin="archive"] .ads-toast {
          background: var(--ads-color-primary) !important;
          color: #FFFFFF !important;
          border: 3px solid var(--ads-color-primary) !important;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.85);
          font-weight: 900;
        }
        [data-skin="archive"] .ads-toast--error {
          background: var(--ads-color-secondary) !important;
          color: #FFFFFF !important;
          border-color: var(--ads-color-secondary) !important;
        }

        @keyframes ads-slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-toast {
            animation: none !important;
          }
        }
      `})]}),i.__docgenInfo={description:`ToastProvider & useToast

Simple system for sliding notifications.`,methods:[],displayName:`ToastContainer`,props:{toasts:{required:!0,tsType:{name:`Array`,elements:[{name:`Toast`}],raw:`Toast[]`},description:``}}}})),o,s,c;e((()=>{a(),o={title:`Feedback/ToastContainer`,component:i,tags:[`autodocs`]},s={args:{toasts:[{id:`1`,message:`CONNECTION ESTABLISHED`,type:`info`},{id:`2`,message:`CRITICAL ERROR: CORE TEMP`,type:`error`}]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    toasts: [{
      id: '1',
      message: 'CONNECTION ESTABLISHED',
      type: 'info'
    }, {
      id: '2',
      message: 'CRITICAL ERROR: CORE TEMP',
      type: 'error'
    }]
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};
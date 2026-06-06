import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{rt as n,t as r}from"./iframe-BZU-yuso.js";var i,a,o,s=e((()=>{i=t(n(),1),a=r(),o=({lines:e,title:t=`SYSTEM TERMINAL`,showCursor:n=!0,typeSpeed:r=0,className:o=``})=>{let[s,c]=(0,i.useState)(r>0?[]:e);return(0,i.useEffect)(()=>{if(r>0){let t=0,n=setInterval(()=>{t<e.length?(c(n=>[...n,e[t]]),t++):clearInterval(n)},r);return()=>clearInterval(n)}},[e,r]),(0,a.jsxs)(`div`,{className:`ads-terminal ${o}`,style:{background:`var(--ads-color-bg)`,color:`var(--ads-color-primary)`,fontFamily:`var(--ads-font-mono)`,padding:`1rem`,border:`1px solid var(--ads-color-border)`,boxShadow:`inset 0 0 10px rgba(0,0,0,0.5)`,position:`relative`},children:[t&&(0,a.jsx)(`div`,{style:{fontSize:`0.7rem`,opacity:.5,marginBottom:`0.5rem`,borderBottom:`1px solid rgba(255,255,255,0.1)`,paddingBottom:`2px`},children:t}),(0,a.jsxs)(`div`,{className:`ads-terminal__output`,style:{fontSize:`0.9rem`,lineHeight:`1.4`},children:[s.map((e,t)=>(0,a.jsxs)(`div`,{style:{marginBottom:`2px`},children:[(0,a.jsx)(`span`,{style:{marginRight:`8px`,opacity:.7},children:`>`}),e]},t)),n&&(0,a.jsx)(`span`,{className:`ads-terminal__cursor`,style:{display:`inline-block`,width:`8px`,height:`15px`,background:`var(--ads-color-primary)`,marginLeft:`4px`,animation:`ads-blink 1s infinite`}})]}),(0,a.jsx)(`style`,{children:`
        @keyframes ads-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-terminal__cursor {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `})]})},o.__docgenInfo={description:`Terminal

A container that simulates a monospaced command-line interface.
Features optional auto-typing effect and a blinking cursor.`,methods:[],displayName:`Terminal`,props:{lines:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"SYSTEM TERMINAL"`,computed:!1}},showCursor:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},typeSpeed:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));export{s as n,o as t};
import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-BZU-yuso.js";import{n as r,t as i}from"./Button-CwL9-7UD.js";import{n as a,t as o}from"./Panel-Xf9BQFWj.js";var s,c,l=e((()=>{t(),a(),r(),s=n(),c=({isOpen:e,onClose:t,title:n=`SYSTEM ALERT`,children:r,actions:a,variant:c=`primary`})=>e?(0,s.jsxs)(`div`,{className:`ads-modal-overlay`,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:2e3,backdropFilter:`blur(2px)`},children:[(0,s.jsx)(`div`,{className:`ads-modal-content`,style:{width:`100%`,maxWidth:`500px`,animation:`ads-pop-in 0.2s ease-out`},children:(0,s.jsxs)(o,{title:n,variant:c,actions:(0,s.jsx)(i,{onClick:t,style:{padding:`0 4px`,fontSize:`0.8rem`,minWidth:`20px`},children:`X`}),children:[(0,s.jsx)(`div`,{style:{padding:`0.5rem 0`},children:r}),a&&(0,s.jsx)(`div`,{style:{marginTop:`1.5rem`,display:`flex`,justifyContent:`flex-end`,gap:`0.5rem`},children:a})]})}),(0,s.jsx)(`style`,{children:`
        @keyframes ads-pop-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `})]}):null,c.__docgenInfo={description:`RetroModal

A centered dialog box that follows the CDS theme contract.
Includes a backdrop and themed "Window" container.`,methods:[],displayName:`RetroModal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"SYSTEM ALERT"`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}}}}})),u,d,f,p,m;e((()=>{l(),r(),t(),u=n(),d={title:`High-Flavor/RetroModal`,component:c,tags:[`autodocs`]},f={args:{isOpen:!0,title:`SYSTEM ALERT`,children:(0,u.jsx)(`p`,{children:`Critical failure detected in sector 7G.`}),actions:(0,u.jsx)(i,{variant:`primary`,children:`ACKNOWLEDGE`}),onClose:()=>{}}},p={args:{isOpen:!0,title:`FORMAT DRIVE?`,variant:`secondary`,children:(0,u.jsx)(`p`,{children:`All data will be lost forever. Proceed?`}),actions:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{variant:`outline`,children:`CANCEL`}),(0,u.jsx)(i,{children:`PROCEED`})]}),onClose:()=>{}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'SYSTEM ALERT',
    children: <p>Critical failure detected in sector 7G.</p>,
    actions: <Button variant="primary">ACKNOWLEDGE</Button>,
    onClose: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'FORMAT DRIVE?',
    variant: 'secondary',
    children: <p>All data will be lost forever. Proceed?</p>,
    actions: <>
        <Button variant="outline">CANCEL</Button>
        <Button>PROCEED</Button>
      </>,
    onClose: () => {}
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Warning`]}))();export{f as Default,p as Warning,m as __namedExportsOrder,d as default};
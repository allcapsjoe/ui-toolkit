import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-ClHDfdvo.js";import{n as r,t as i}from"./Panel-_HjeHGlK.js";var a,o,s,c,l,u,d,f;e((()=>{r(),t(),a=n(),o={title:`Layout/Panel`,component:i,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]}}},s={args:{eyebrow:`System Status`,title:`All Systems Operational`,children:(0,a.jsx)(`p`,{children:`Link established. Monitoring core vitals.`}),variant:`primary`}},c={args:{eyebrow:`Workbench`,title:`Radar Watch`,children:(0,a.jsx)(`p`,{children:`Detailed view of upcoming matches.`}),onClose:()=>alert(`Close clicked`)}},l={args:{eyebrow:`Archive Logs`,title:`Historical Data v1995`,children:(0,a.jsx)(`p`,{children:`Viewing historical data from the vault...`}),variant:`secondary`}},u={args:{children:(0,a.jsx)(`p`,{children:`A simple floating panel without a header.`})}},d={args:{title:`Console Output`,children:(0,a.jsx)(`p`,{children:`Scrolling log data...`}),isFullHeight:!0},decorators:[e=>(0,a.jsx)(`div`,{style:{height:`400px`},children:(0,a.jsx)(e,{})})]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'System Status',
    title: 'All Systems Operational',
    children: <p>Link established. Monitoring core vitals.</p>,
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Workbench',
    title: 'Radar Watch',
    children: <p>Detailed view of upcoming matches.</p>,
    onClose: () => alert('Close clicked')
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Archive Logs',
    title: 'Historical Data v1995',
    children: <p>Viewing historical data from the vault...</p>,
    variant: 'secondary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>A simple floating panel without a header.</p>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Console Output',
    children: <p>Scrolling log data...</p>,
    isFullHeight: true
  },
  decorators: [Story => <div style={{
    height: '400px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`WithCloseButton`,`Secondary`,`WithoutTitle`,`FullHeight`]}))();export{d as FullHeight,s as Primary,l as Secondary,c as WithCloseButton,u as WithoutTitle,f as __namedExportsOrder,o as default};
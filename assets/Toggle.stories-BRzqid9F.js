import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{rt as n,t as r}from"./iframe-ClHDfdvo.js";import{n as i,t as a}from"./Toggle-DFhgM8g2.js";var o,s,c,l,u,d;e((()=>{i(),o=t(n(),1),s=r(),c={title:`Input/Toggle`,component:a,tags:[`autodocs`]},l={render:e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(a,{...e,checked:t,onChange:n})},args:{label:`SYSTEM OVERRIDE`}},u={args:{label:`LOCKED CONTROL`,checked:!0,disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState(false);
    return <Toggle {...args} checked={val} onChange={setVal} />;
  },
  args: {
    label: 'SYSTEM OVERRIDE'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'LOCKED CONTROL',
    checked: true,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Interactive`,`Disabled`]}))();export{u as Disabled,l as Interactive,d as __namedExportsOrder,c as default};
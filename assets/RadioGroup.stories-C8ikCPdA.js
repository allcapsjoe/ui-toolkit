import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{rt as n,t as r}from"./iframe-ClHDfdvo.js";import{n as i,t as a}from"./RadioGroup-BwR3MfnH.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Input/RadioGroup`,component:a,tags:[`autodocs`],argTypes:{direction:{control:`select`,options:[`vertical`,`horizontal`]}}},l=[{value:`low`,label:`Low Resolution (CRT)`},{value:`med`,label:`Medium Resolution`},{value:`high`,label:`High Resolution (VGA)`}],u=()=>{let[e,t]=(0,o.useState)(`low`);return(0,s.jsx)(a,{name:`resolution`,label:`Monitor Display Mode`,options:l,value:e,onChange:t})},d=()=>{let[e,t]=(0,o.useState)(`med`);return(0,s.jsx)(a,{name:`resolution_horiz`,label:`Choose Graphics Quality`,direction:`horizontal`,options:l,value:e,onChange:t})},f=()=>{let[e,t]=(0,o.useState)(`low`);return(0,s.jsx)(a,{name:`resolution_disabled`,label:`Graphics Driver Selector`,options:[...l,{value:`super-vga`,label:`Super SVGA (Locked)`,disabled:!0}],value:e,onChange:t})},u.__docgenInfo={description:``,methods:[],displayName:`Vertical`},d.__docgenInfo={description:``,methods:[],displayName:`Horizontal`},f.__docgenInfo={description:``,methods:[],displayName:`WithDisabledOption`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState('low');
  return <RadioGroup name="resolution" label="Monitor Display Mode" options={sampleOptions} value={val} onChange={setVal} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState('med');
  return <RadioGroup name="resolution_horiz" label="Choose Graphics Quality" direction="horizontal" options={sampleOptions} value={val} onChange={setVal} />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState('low');
  const optionsWithDisabled = [...sampleOptions, {
    value: 'super-vga',
    label: 'Super SVGA (Locked)',
    disabled: true
  }];
  return <RadioGroup name="resolution_disabled" label="Graphics Driver Selector" options={optionsWithDisabled} value={val} onChange={setVal} />;
}`,...f.parameters?.docs?.source}}},p=[`Vertical`,`Horizontal`,`WithDisabledOption`]}))();export{d as Horizontal,u as Vertical,f as WithDisabledOption,p as __namedExportsOrder,c as default};
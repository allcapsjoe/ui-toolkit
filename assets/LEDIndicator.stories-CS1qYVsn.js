import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./LEDIndicator-A028Iz1D.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Feedback/LEDIndicator`,component:n,tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`error`,`success`,`warning`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},isBlinking:{control:`boolean`}}},i={args:{label:`SYSTEM ONLINE`,color:`primary`,isBlinking:!1}},a={args:{label:`DISK ACCESS`,color:`warning`,isBlinking:!0}},o={args:{label:`CORE OVERHEAT WARNING`,color:`error`,isBlinking:!0,size:`lg`}},s={args:{label:`LINK SECURE`,color:`success`,isBlinking:!1}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'SYSTEM ONLINE',
    color: 'primary',
    isBlinking: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'DISK ACCESS',
    color: 'warning',
    isBlinking: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CORE OVERHEAT WARNING',
    color: 'error',
    isBlinking: true,
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'LINK SECURE',
    color: 'success',
    isBlinking: false
  }
}`,...s.parameters?.docs?.source}}},c=[`PrimaryOn`,`BlinkingWarning`,`AlarmError`,`SuccessSignals`]}))();export{o as AlarmError,a as BlinkingWarning,i as PrimaryOn,s as SuccessSignals,c as __namedExportsOrder,r as default};
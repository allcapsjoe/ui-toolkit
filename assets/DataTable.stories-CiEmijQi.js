import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-DLifmZXi.js";import{n as r,t as i}from"./DataTable-5PYcSJlq.js";var a,o,s,c,l,u;e((()=>{r(),t(),a=n(),o={title:`Data/DataTable`,component:i,tags:[`autodocs`]},s=[{id:`0x01`,module:`KERNEL`,status:`ACTIVE`},{id:`0x02`,module:`NETWORK`,status:`WAIT`},{id:`0x03`,module:`SECURITY`,status:`ERR`}],c={args:{data:s,columns:[{header:`ID`,accessor:`id`},{header:`MODULE`,accessor:`module`},{header:`STATUS`,accessor:`status`}]}},l={args:{data:s,columns:[{header:`ADDR`,accessor:`id`},{header:`SYSTEM MODULE`,accessor:`module`},{header:`HEALTH`,accessor:e=>(0,a.jsx)(`span`,{style:{color:e.status===`ACTIVE`?`var(--ads-color-primary)`:`var(--ads-color-secondary)`},children:e.status})}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'MODULE',
      accessor: 'module'
    }, {
      header: 'STATUS',
      accessor: 'status'
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    columns: [{
      header: 'ADDR',
      accessor: 'id'
    }, {
      header: 'SYSTEM MODULE',
      accessor: 'module'
    }, {
      header: 'HEALTH',
      accessor: item => <span style={{
        color: item.status === 'ACTIVE' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)'
      }}>
            {item.status}
          </span>
    }]
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`CustomRender`]}))();export{l as CustomRender,c as Default,u as __namedExportsOrder,o as default};
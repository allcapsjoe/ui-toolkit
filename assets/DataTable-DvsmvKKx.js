import{i as e}from"./preload-helper-xPQekRTU.js";import{rt as t,t as n}from"./iframe-ClHDfdvo.js";function r({columns:e,data:t,onRowClick:n}){return(0,i.jsxs)(`div`,{className:`ads-data-table-wrapper`,style:{overflowX:`auto`},children:[(0,i.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontFamily:`var(--ads-font-mono)`,fontSize:`0.9rem`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{children:e.map((e,t)=>(0,i.jsx)(`th`,{style:{textAlign:`left`,padding:`0.75rem`,border:`1px solid var(--ads-color-border)`,background:`var(--ads-color-surface)`,color:`var(--ads-color-primary)`,textTransform:`uppercase`,position:`sticky`,top:0},children:e.header},t))})}),(0,i.jsx)(`tbody`,{children:t.map((t,r)=>(0,i.jsx)(`tr`,{onClick:()=>n?.(t),style:{cursor:n?`pointer`:`default`,transition:`background 0.2s`},className:`ads-table-row`,children:e.map((e,n)=>(0,i.jsx)(`td`,{style:{padding:`0.75rem`,border:`1px solid var(--ads-color-border)`},children:typeof e.accessor==`function`?e.accessor(t):t[e.accessor]},n))},r))})]}),(0,i.jsx)(`style`,{children:`
        .ads-table-row:hover {
          background: rgba(var(--ads-color-primary-rgb, 57, 255, 20), 0.1);
        }
        [data-skin="win95"] .ads-table-row:hover {
          background: var(--ads-color-primary);
          color: #fff;
        }
      `})]})}var i,a=e((()=>{t(),i=n(),r.__docgenInfo={description:`DataTable

A structured data grid that follows CDS aesthetics.
Automatically applies themed borders, hover effects, and typography.`,methods:[],displayName:`DataTable`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`DataTableColumn`,elements:[{name:`T`}],raw:`DataTableColumn<T>`}],raw:`DataTableColumn<T>[]`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},onRowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T) => void`,signature:{arguments:[{type:{name:`T`},name:`item`}],return:{name:`void`}}},description:``}}}}));export{a as n,r as t};
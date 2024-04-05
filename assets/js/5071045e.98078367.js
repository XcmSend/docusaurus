"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9850],{762:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=s(4848),n=s(8453);const o={},i="Troubleshooting",l={id:"tests/troubleshooting",title:"Troubleshooting",description:"Best pratices for troubleshooting and debugging Bagpipes.",source:"@site/docs/tests/troubleshooting.md",sourceDirName:"tests",slug:"/tests/troubleshooting",permalink:"/docusaurus/docs/tests/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tests/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Api tests",permalink:"/docusaurus/docs/tests/api"},next:{title:"User Profile (Avatars)",permalink:"/docusaurus/docs/users/profile"}},c={},u=[{value:"Reset:",id:"reset",level:2},{value:"Rebuild:",id:"rebuild",level:2},{value:"Linux:",id:"linux",level:3},{value:"file watcher limit:",id:"file-watcher-limit",level:5},{value:"Ask for support:",id:"ask-for-support",level:4}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Best pratices for troubleshooting and debugging Bagpipes."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"reset",children:"Reset:"}),"\n",(0,r.jsx)(t.p,{children:"In order to quickly reset, we recommend that you clear your browser cookies for Bagpipes site and reload the site."}),"\n",(0,r.jsx)(t.h2,{id:"rebuild",children:"Rebuild:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"rm -rf node_modules/ && npm run build -f \n"})}),"\n",(0,r.jsx)(t.h3,{id:"linux",children:"Linux:"}),"\n",(0,r.jsx)(t.h5,{id:"file-watcher-limit",children:"file watcher limit:"}),"\n",(0,r.jsx)(t.p,{children:"If you get the following error:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Error: ENOSPC: System limit for number of file watchers reached, watch ''\nat FSWatcher. (node:internal/fs/watchers:244:19)\nat Object.watch (node:fs:2264:34)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This means that you need to increase your linux file watcher limit size. Do this by increasing the number in the file: ",(0,r.jsx)(t.code,{children:"/proc/sys/fs/inotify/max_user_watches"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"ask-for-support",children:"Ask for support:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/XcmSend/app/issues/new",children:"Open a github issue"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
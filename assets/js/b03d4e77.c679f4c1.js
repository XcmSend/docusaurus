"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7099],{6666:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=a(4848),t=a(8453);const c={},o="Api Documentation",d={id:"api/docs",title:"Api Documentation",description:"DB:",source:"@site/docs/api/docs.md",sourceDirName:"api",slug:"/api/docs",permalink:"/docs/api/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bot commands",permalink:"/docs/api/discord_bot_commands"},next:{title:"Api client example Python flask",permalink:"/docs/api/flask"}},i={},l=[{value:"DB:",id:"db",level:2},{value:"Paths:",id:"paths",level:3},{value:"Path: <code>/scenario/info</code>;",id:"path-scenarioinfo",level:5},{value:"Code:",id:"code",level:3},{value:"Path: <code>/create/scenario</code>;",id:"path-createscenario",level:2},{value:"Code:",id:"code-1",level:3},{value:"<code>/create/swap</code>:",id:"createswap",level:2},{value:"Code:",id:"code-2",level:3},{value:"<code>/xcm-asset-transfer</code>:",id:"xcm-asset-transfer",level:4},{value:"Info:",id:"info",level:5},{value:"Code example:",id:"code-example",level:5},{value:"Result:",id:"result",level:4},{value:"<code>/polkadot/openchannels</code>",id:"polkadotopenchannels",level:2},{value:"Info:",id:"info-1",level:5},{value:"Code example:",id:"code-example-1",level:5},{value:"<code>/call/template</code>",id:"calltemplate",level:2},{value:"Info:",id:"info-2",level:5},{value:"<code>/call/scenario</code>",id:"callscenario",level:4},{value:"Info:",id:"info-3",level:5},{value:"<code>/broadcast</code>:",id:"broadcast",level:2},{value:"Information:",id:"information",level:6},{value:"Testing broadcast:",id:"testing-broadcast",level:5}];function r(e){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"api-documentation",children:"Api Documentation"}),"\n",(0,s.jsx)(n.h2,{id:"db",children:"DB:"}),"\n",(0,s.jsxs)(n.p,{children:["Right now the API just use a simple key value inspired json file to store the diagram data, the file can be found at ",(0,s.jsx)(n.em,{children:"dist/src/api/urls2.json"}),".",(0,s.jsx)(n.br,{}),"\n","The format is ",(0,s.jsx)(n.code,{children:"{storage_key, compressed_diagramdata}"})]}),"\n",(0,s.jsx)(n.p,{children:"Reset db:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "{urls:[]}" > dist/src/api/urls2.json\n'})}),"\n",(0,s.jsx)(n.h3,{id:"paths",children:"Paths:"}),"\n",(0,s.jsxs)(n.h5,{id:"path-scenarioinfo",children:["Path: ",(0,s.jsx)(n.code,{children:"/scenario/info"}),";"]}),"\n",(0,s.jsx)(n.p,{children:"Get information about a scenario."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ curl -X POST -H "Content-Type: application/json" -d \'{"id": "Uvervffcw"}\' http://localhost:8080/scenario/info\n$ {"result":"assetHub > xTransfer > polkadot"}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"path-createscenario",children:["Path: ",(0,s.jsx)(n.code,{children:"/create/scenario"}),";"]}),"\n",(0,s.jsx)(n.p,{children:"Create a new scenario."}),"\n",(0,s.jsx)(n.h3,{id:"code-1",children:"Code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ curl -X POST -H "Content-Type: application/json" -d \'{"source_chain": "polkadot", "dest_chain": "hydraDx", "source_address": "your_source_address", "amount": 100, "assetid": 1}\' http://localhost:8080/create/scenario\n$ {"result":"QWdI3KifK"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After your scenario id is generated, you can import it in the ui:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"http://localhost:5173/#/create/?diagramData=MY_SCENARIO_ID"})]}),"\n",(0,s.jsxs)(n.h2,{id:"createswap",children:[(0,s.jsx)(n.code,{children:"/create/swap"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Swap an asset using the HydraDx omnipool."}),"\n",(0,s.jsx)(n.h3,{id:"code-2",children:"Code:"}),"\n",(0,s.jsx)(n.p,{children:"In this example we want to swap 10 amount of asset 0(HDX) for asset 5(DOT)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ curl -X POST -H "Content-Type: application/json" -d \'{"assetin": 0, "assetout": 5, "amount": 10 }\' http://localhost:8080/create/swap\n{"success":true,"swap":{"swap_tx":"0xac043b05010000000500000000a0724e180900000000000000000000377d61b2850000000000000000000000","scenarioid":"IkwpZfaqF"}}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sign and broadcast the swap_tx or view the scenario in our main UI with the scenarioid."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"input:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"assetin"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Number type, the asset id of the asset you want to convert from and have balance of."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"assetout"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Number type, the asset id of the asset you want to recieve. The recieving assetid"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"amount"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Number type, Enter the amount you want to swaps of assetin asset. ",(0,s.jsx)(n.strong,{children:"Note:"})," if you want to exchange for example 10 dot, enter 10, do not enter the amount * token decimals. Enter the amount just like you would on any swap site."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"xcm-asset-transfer",children:[(0,s.jsx)(n.code,{children:"/xcm-asset-transfer"}),":"]}),"\n",(0,s.jsx)(n.h5,{id:"info",children:"Info:"}),"\n",(0,s.jsx)(n.p,{children:"Transfer an on-chain asset from one polkadot connected parachain to another"}),"\n",(0,s.jsx)(n.h5,{id:"code-example",children:"Code example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ curl -X POST http://127.0.0.1:8080/xcm-asset-transfer   -H "Content-Type: application/json"   -d \'{\n    "sourchain": "assethub",\n    "destchain": "hydradx",\n    "assetid": "1984",\n    "amount": 100,\n    "destinationaddress": "7MinRZBqmh7SaJsNjsMuJHw3teB1Q834vvG1zSMPHQ2DQaAa"\n  }\'\n'})}),"\n",(0,s.jsx)(n.h4,{id:"result",children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'{"txdata":"0xec04630803000100c91f0300010100b673e1853db0a7eb8a38e7a6309d0f5a39c29d929f586f7d5d1e588845e2895703040000000091010000000000"} '})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"input:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"sourchain = assethub/hydradx/polkadot"}),"\n",(0,s.jsx)(n.li,{children:"deschain = hydradx/polkadot/assethub"}),"\n",(0,s.jsx)(n.li,{children:"assetid = id of asset to send"}),"\n",(0,s.jsx)(n.li,{children:"amount = raw amount to send"}),"\n",(0,s.jsx)(n.li,{children:"destination address = address of reciever on the destination chain"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"polkadotopenchannels",children:(0,s.jsx)(n.code,{children:"/polkadot/openchannels"})}),"\n",(0,s.jsx)(n.h5,{id:"info-1",children:"Info:"}),"\n",(0,s.jsx)(n.p,{children:"Check what hrmp channels are avaliable for a parachain connected to polkadot."}),"\n",(0,s.jsx)(n.h5,{id:"code-example-1",children:"Code example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{"paraid": 1000}\' http://localhost:8080/polkadot/openchannels              \n'})}),"\n",(0,s.jsxs)(n.p,{children:["Result:\n",(0,s.jsx)(n.code,{children:'{"open_hrmp_channels":1001,1002,2000,2004,2006,2007,2011,2012,2013,2030,2031,2032,2034,2035,2040,2046,2048,2051,2094,2101,2104],"sourcechain":1000}'})]}),"\n",(0,s.jsx)(n.h2,{id:"calltemplate",children:(0,s.jsx)(n.code,{children:"/call/template"})}),"\n",(0,s.jsx)(n.h5,{id:"info-2",children:"Info:"}),"\n",(0,s.jsx)(n.p,{children:"Coming soon"}),"\n",(0,s.jsx)(n.h4,{id:"callscenario",children:(0,s.jsx)(n.code,{children:"/call/scenario"})}),"\n",(0,s.jsx)(n.h5,{id:"info-3",children:"Info:"}),"\n",(0,s.jsx)(n.p,{children:"Coming soon"}),"\n",(0,s.jsxs)(n.h2,{id:"broadcast",children:[(0,s.jsx)(n.code,{children:"/broadcast"}),":"]}),"\n",(0,s.jsx)(n.h6,{id:"information",children:"Information:"}),"\n",(0,s.jsx)(n.p,{children:"Broadcast a transaction using author submitextrinsics"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"input:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"chain = assethub/hydradx/polkadot"}),"\n",(0,s.jsx)(n.li,{children:"tx = signed transaction"}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"testing-broadcast",children:"Testing broadcast:"}),"\n",(0,s.jsx)(n.p,{children:"Broadcast:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"async function broadcast_transaction() {\n    await cryptoWaitReady();\n    console.log(`broadcast_transaction start`);\n    console.log(`generating tx..`);\n// set your account keys\n    const alice = get_test_account();\n    const pa_tx = (await route_tx('polkadot', 'hydradx', 0, 20000, '16XByL4WpQ4mXzT2D8Fb3vmTLWfHu7QYh5wXX34GvahwPotJ'));\n    console.log(`rawtx:`, pa_tx.toHex());\n    const api = await connectToWsEndpoint('polkadot');\n    const signhere = await pa_tx.signAsync(alice);\n    console.log(`Signature: `, signhere.toHex());\n    const testo = api.tx(signhere); // this will break if the tx is invalid\n    console.log(`Verfied tx:`, testo.toHex());\n    const bhash = await broadcastToChain('polkadot', testo);\n    console.log(`blockhash published: `, bhash.toString());\n    console.log(`broadcast_transaction done`);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Configure the right key in get_test_account and run the tx signing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"tx_si start\ngenerating tx..\nroute_tx start\npolkadot:hydradx\nhandleTransfer for Polkadot to HydraDx...\ncant connect\nconnect\ndrafting dot to hydradx\nCreating tx\n4\nrawtx: 0xf404630803000100c91f0300010100f43376315face751ae6014e8a94301b2c27c0bc4a234e9997ed2c856d13d3d2f030400000000823801000000000000\nSignature:  0x8d0284005400e2f7f5669b26998d8e4d3c1a2c8a2d0a9af827ca54a1cc3509105035c32e01286f7090ae34a1e3b8827ef9c035ede86a2b3e5c16bb6df072541327c7797d07e5934e245ae7c9ce199b2212fe559ff2df0a9ad1d66421aa3828223d8b2e9c8b45020400630803000100c91f0300010100f43376315face751ae6014e8a94301b2c27c0bc4a234e9997ed2c856d13d3d2f030400000000823801000000000000\nVerfied tx: 0x8d0284005400e2f7f5669b26998d8e4d3c1a2c8a2d0a9af827ca54a1cc3509105035c32e01286f7090ae34a1e3b8827ef9c035ede86a2b3e5c16bb6df072541327c7797d07e5934e245ae7c9ce199b2212fe559ff2df0a9ad1d66421aa3828223d8b2e9c8b45020400630803000100c91f0300010100f43376315face751ae6014e8a94301b2c27c0bc4a234e9997ed2c856d13d3d2f030400000000823801000000000000\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy the verified tx and curl it to the broadcast api:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n  "chain": "polkadot",\n  "tx": "0x8d0284005400e2f7f5669b26998d8e4d3c1a2c8a2d0a9af827ca54a1cc3509105035c32e01286f7090ae34a1e3b8827ef9c035ede86a2b3e5c16bb6df072541327c7797d07e5934e245ae7c9ce199b2212fe559ff2df0a9ad1d66421aa3828223d8b2e9c8b45020400630803000100c91f0300010100f43376315face751ae6014e8a94301b2c27c0bc4a234e9997ed2c856d13d3d2f030400000000823801000000000000"\n}\' http://127.0.0.1:8080/broadcast\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Result:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:'{"status":"broadcasted","hash":"0xf9b86cd2121c25685b5bbf9efffc5f6c81e7d3b568811860de36dccb09837d2b"}'})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>d});var s=a(6540);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
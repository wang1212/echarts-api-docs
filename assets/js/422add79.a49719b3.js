"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[26],{7446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var l=t(4848),s=t(8453);const r={title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",tags:["ZRender","Element"]},i=".Element",d={id:"zrender-reference/api/Element",title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",source:"@site/docs/2-zrender-reference/99-api/Element.md",sourceDirName:"2-zrender-reference/99-api",slug:"/zrender-reference/api/Element",permalink:"/echarts-api-docs/docs/zrender-reference/api/Element",draft:!1,unlisted:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/2-zrender-reference/99-api/Element.md",tags:[{label:"ZRender",permalink:"/echarts-api-docs/docs/tags/z-render"},{label:"Element",permalink:"/echarts-api-docs/docs/tags/element"}],version:"current",frontMatter:{title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",tags:["ZRender","Element"]},sidebar:"zrenderSidebar",previous:{title:".Animator",permalink:"/echarts-api-docs/docs/zrender-reference/api/Animator"}},c={},h=[{value:"\u72b6\u6001",id:"\u72b6\u6001",level:2},{value:"<code>states</code>",id:"states",level:3},{value:"<code>stateProxy</code>",id:"stateproxy",level:3},{value:"<code>stateTransition</code>",id:"statetransition",level:3},{value:"<code>currentStates</code>",id:"currentstates",level:3},{value:"<code>ensureState()</code>",id:"ensurestate",level:3},{value:"<code>getState()</code>",id:"getstate",level:3},{value:"<code>hasState()</code>",id:"hasstate",level:3},{value:"<code>useState()</code>",id:"usestate",level:3},{value:"<code>useStates()</code>",id:"usestates",level:3},{value:"<code>removeState()</code>",id:"removestate",level:3},{value:"<code>clearStates()</code>",id:"clearstates",level:3},{value:"\u52a8\u753b",id:"\u52a8\u753b",level:2},{value:"<code>animate()</code>",id:"animate",level:3},{value:"<code>animateTo()</code>",id:"animateto",level:3},{value:"<code>animateFrom()</code>",id:"animatefrom",level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"element",children:".Element"}),"\n",(0,l.jsxs)(n.p,{children:["ZRender \u7684 ",(0,l.jsx)(n.code,{children:"Element"})," \u5143\u7d20\u7c7b\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L293",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801"})})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderelement",children:"\u5b98\u65b9 APIs \u6587\u6863"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u72b6\u6001",children:"\u72b6\u6001"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u7cfb\u5217\u4e0e\u5143\u7d20\u5b9e\u4f8b\u72b6\u6001\u7ba1\u7406\u76f8\u5173\u7684 APIs\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// * \u4e3a\u5143\u7d20\u5b9e\u4f8b\u6dfb\u52a0\u4e00\u4e2a\u9f20\u6807\u7684 hover \u6548\u679c\n// \u4e3a\u5143\u7d20\u6ce8\u518c\u4e00\u4e2a hover \u72b6\u6001\u5bf9\u8c61\n// highlight-start\nel.states.hover = {\n  style: {\n    fill: 'red',\n  },\n};\n// highlight-end\n\n// \u8bbe\u7f6e\u5143\u7d20\u7684\u72b6\u6001\u8f6c\u6362\u52a8\u753b\n// highlight-start\nel.stateTransition = {\n  duration: 400,\n  done: () => {\n    console.log('switch state done!');\n  },\n};\n// highlight-end\n\n// \u6dfb\u52a0\u9f20\u6807\u4e8b\u4ef6\nel.onmouseover = function () {\n  // highlight-next-line\n  el.useState('hover', true);\n};\nel.onmouseover = function () {\n  // highlight-next-line\n  el.removeState('hover');\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"states",children:(0,l.jsx)(n.code,{children:"states"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"states: Dictionary<ElementState> = {}"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L416",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u5b9e\u4f8b\u7684\u72b6\u6001\u96c6\u5408\uff08\u72b6\u6001\u662f\u4e00\u4e2a\u5143\u7d20\u5b9e\u4f8b\u7684\u5c5e\u6027\u96c6\u5408\uff09\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"stateproxy",children:(0,l.jsx)(n.code,{children:"stateProxy"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"stateProxy?: (stateName: string, targetStates?: string[]) => ElementState"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L429",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsxs)(n.p,{children:["\u5143\u7d20\u5b9e\u4f8b\u7684\u72b6\u6001\u4ee3\u7406\uff0c\u53ef\u4ee5\u901a\u8fc7\u72b6\u6001\u540d\u79f0\u52a8\u6001\u751f\u6210\u72b6\u6001\u5bf9\u8c61\u3002ZRender \u9996\u5148\u4f1a\u5c1d\u8bd5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"stateProxy()"})," \u83b7\u53d6\u5143\u7d20\u7684\u72b6\u6001\u5bf9\u8c61\uff0c\u5176\u6b21\u624d\u4f1a\u8bbf\u95ee ",(0,l.jsx)(n.code,{children:"states"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"statetransition",children:(0,l.jsx)(n.code,{children:"stateTransition"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"stateTransition: ElementAnimateConfig"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u5b9e\u4f8b\u7684\u72b6\u6001\u8f6c\u6362\u52a8\u753b\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"currentstates",children:(0,l.jsx)(n.code,{children:"currentStates"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"currentStates?: string[] = []"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L409",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u5b9e\u4f8b\u5f53\u524d\u5df2\u7ecf\u5e94\u7528\u7684\u72b6\u6001\u540d\u79f0\u5217\u8868\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"ensurestate",children:(0,l.jsx)(n.code,{children:"ensureState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"ensureState(name: string): ElementState"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L814",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u786e\u4fdd\u72b6\u6001\u5bf9\u8c61\u5b58\u5728\uff08\u4e0d\u5b58\u5728\u5c31\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u72b6\u6001\u5bf9\u8c61\uff09\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"name"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u540d\u79f0"})]})})]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u503c"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"state"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13",children:(0,l.jsx)(n.code,{children:"ElementState"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u53c2\u6570 ",(0,l.jsx)(n.code,{children:"name"})," \u5bf9\u5e94\u7684\u72b6\u6001\u5bf9\u8c61"]})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getstate",children:(0,l.jsx)(n.code,{children:"getState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"getState(name: string)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L806",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u83b7\u53d6\u6307\u5b9a\u7684\u72b6\u6001\u5bf9\u8c61\u5b9a\u4e49\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"hasstate",children:(0,l.jsx)(n.code,{children:"hasState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"hasState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L799",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5224\u65ad\u5143\u7d20\u5f53\u524d\u72b6\u6001\u662f\u5426\u4e0d\u4e3a\u7a7a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"usestate",children:(0,l.jsx)(n.code,{children:"useState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"useState(stateName: string, keepCurrentStates?: boolean, noAnimation?: boolean, forceUseHoverLayer?: boolean): ElementState"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L837",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"stateName"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u540d\u79f0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"keepCurrentStates"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u662f\u5426\u9700\u8981\u4fdd\u6301\u5f53\u524d\u5df2\u5e94\u7528\u7684\u72b6\u6001"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"noAnimation"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"forceUseHoverLayer"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u503c"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"state"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13",children:(0,l.jsx)(n.code,{children:"ElementState"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u53c2\u6570 ",(0,l.jsx)(n.code,{children:"stateName"})," \u5bf9\u5e94\u7684\u72b6\u6001\u5bf9\u8c61"]})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"usestates",children:(0,l.jsx)(n.code,{children:"useStates()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"useStates(states: string[], noAnimation?: boolean, forceUseHoverLayer?: boolean)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L939",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u591a\u4e2a\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"states"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string[]"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u540d\u79f0\u5217\u8868"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"noAnimation"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"forceUseHoverLayer"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"removestate",children:(0,l.jsx)(n.code,{children:"removeState()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"removeState(state: string)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1036",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u79fb\u9664\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"state"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"}}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u72b6\u6001\u540d\u79f0"})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"clearstates",children:(0,l.jsx)(n.code,{children:"clearStates()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"clearStates(noAnimation?: boolean)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L825",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u6e05\u7a7a\u6240\u6709\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"noAnimation"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u52a8\u753b",children:"\u52a8\u753b"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderanimatable",children:"\u5b98\u65b9 APIs \u6587\u6863"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"animate",children:(0,l.jsx)(n.code,{children:"animate()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"animate(key?: string, loop?: boolean, allowDiscreteAnimation?: boolean)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1462",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u5143\u7d20\u8bbe\u7f6e\u52a8\u753b\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76f8\u5173"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/echarts-api-docs/docs/zrender-reference/api/Animator",children:"Animator"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"animateto",children:(0,l.jsx)(n.code,{children:"animateTo()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"animateTo(target: Props, cfg?: ElementAnimateConfig, animationProps?: MapToType<Props, boolean>)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1560",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u5143\u7d20\u8fc7\u6e21\u5230\u76ee\u6807\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"animatefrom",children:(0,l.jsx)(n.code,{children:"animateFrom()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"animateFrom(target: Props, cfg: ElementAnimateConfig, animationProps?: MapToType<Props, boolean>)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1570",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u5143\u7d20\u4ece\u76ee\u6807\u72b6\u6001\u8fc7\u6e21\u5230\u5f53\u524d\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"stopanimation",children:(0,l.jsx)(n.code,{children:"stopAnimation()"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"stopAnimation(scope?: string, forwardToLast?: boolean)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1518",children:(0,l.jsx)(n.em,{children:"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"})})}),"\n",(0,l.jsx)(n.p,{children:"\u505c\u6b62\u52a8\u753b\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var l=t(6540);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkecharts_api_docs=self.webpackChunkecharts_api_docs||[]).push([[428],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=m(a),c=r,f=k["".concat(o,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(f,i(i({ref:e},s),{},{components:a})):n.createElement(f,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4989:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",tags:["ZRender","Element"]},i=".Element",p={unversionedId:"zrender/api/Element",id:"zrender/api/Element",title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",source:"@site/docs/zrender/api/Element.md",sourceDirName:"zrender/api",slug:"/zrender/api/Element",permalink:"/echarts-api-docs/docs/zrender/api/Element",draft:!1,editUrl:"https://github.com/wang1212/echarts-api-docs/tree/main/docs/zrender/api/Element.md",tags:[{label:"ZRender",permalink:"/echarts-api-docs/docs/tags/z-render"},{label:"Element",permalink:"/echarts-api-docs/docs/tags/element"}],version:"current",frontMatter:{title:".Element",description:"ZRender \u7684\u5143\u7d20\u7c7b",tags:["ZRender","Element"]},sidebar:"zrenderSidebar",previous:{title:"zrenderInstance",permalink:"/echarts-api-docs/docs/zrender/api/zrenderInstance"}},o={},m=[{value:"state",id:"state",level:2},{value:"states",id:"states",level:3},{value:"stateTransition",id:"statetransition",level:3},{value:"currentStates",id:"currentstates",level:3},{value:"useState()",id:"usestate",level:3},{value:"useStates()",id:"usestates",level:3},{value:"removeState()",id:"removestate",level:3},{value:"clearStates()",id:"clearstates",level:3}],s={toc:m};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"element"},(0,r.kt)("inlineCode",{parentName:"h1"},".Element")),(0,r.kt)("p",null,"ZRender \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Element")," \u5143\u7d20\u7c7b\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderelement"},"\u5b98\u65b9 APIs \u6587\u6863"))),(0,r.kt)("h2",{id:"state"},"state"),(0,r.kt)("p",null,"\u4e00\u7cfb\u5217\u4e0e\u5143\u7d20\u5b9e\u4f8b\u72b6\u6001\u7ba1\u7406\u76f8\u5173\u7684 APIs\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// * \u4e3a\u5143\u7d20\u5b9e\u4f8b\u6dfb\u52a0\u4e00\u4e2a\u9f20\u6807\u7684 hover \u6548\u679c\n// \u4e3a\u5143\u7d20\u6ce8\u518c\u4e00\u4e2a hover \u72b6\u6001\u5bf9\u8c61\n// highlight-start\nel.states.hover = {\n  style: {\n    fill: 'red',\n  },\n};\n// highlight-end\n\n// \u8bbe\u7f6e\u5143\u7d20\u7684\u72b6\u6001\u8f6c\u6362\u52a8\u753b\n// highlight-start\nel.stateTransition = {\n  duration: 400,\n  done: () => {\n    console.log('switch state done!');\n  },\n};\n// highlight-end\n\n// \u6dfb\u52a0\u9f20\u6807\u4e8b\u4ef6\nel.onmouseover = function () {\n  // highlight-next-line\n  el.useState('hover', true);\n};\nel.onmouseover = function () {\n  // highlight-next-line\n  el.removeState('hover');\n};\n")),(0,r.kt)("h3",{id:"states"},"states"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"states: Dictionary<ElementState> = {}")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L416"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u5143\u7d20\u5b9e\u4f8b\u7684\u72b6\u6001\u96c6\u5408\uff08\u72b6\u6001\u662f\u4e00\u4e2a\u5143\u7d20\u5b9e\u4f8b\u7684\u5c5e\u6027\u96c6\u5408\uff09\u3002"),(0,r.kt)("h3",{id:"statetransition"},"stateTransition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stateTransition: ElementAnimateConfig")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L421"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u5143\u7d20\u5b9e\u4f8b\u7684\u72b6\u6001\u8f6c\u6362\u52a8\u753b\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"currentstates"},"currentStates"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"currentStates?: string[] = []")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L409"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u5143\u7d20\u5b9e\u4f8b\u5f53\u524d\u5df2\u7ecf\u5e94\u7528\u7684\u72b6\u6001\u540d\u79f0\u5217\u8868\u3002"),(0,r.kt)("h3",{id:"usestate"},"useState()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useState(stateName: string, keepCurrentStates?: boolean, noAnimation?: boolean, forceUseHoverLayer?: boolean)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L837"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u4f7f\u7528\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stateName"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keepCurrentStates"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u9700\u8981\u4fdd\u6301\u5f53\u524d\u5df2\u5e94\u7528\u7684\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"noAnimation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forceUseHoverLayer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"state"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L268:13"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementState"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"td"},"stateName")," \u5bf9\u5e94\u7684\u72b6\u6001\u5bf9\u8c61")))),(0,r.kt)("h3",{id:"usestates"},"useStates()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStates(states: string[], noAnimation?: boolean, forceUseHoverLayer?: boolean)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L939"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u4f7f\u7528\u591a\u4e2a\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"states"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001\u540d\u79f0\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"noAnimation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"forceUseHoverLayer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"removestate"},"removeState()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"removeState(state: string)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L1036"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u79fb\u9664\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"state"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001\u540d\u79f0")))),(0,r.kt)("h3",{id:"clearstates"},"clearStates()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clearStates(noAnimation?: boolean)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/zrender/blob/5.3.2/src/Element.ts#L825"},(0,r.kt)("em",{parentName:"a"},"\u67e5\u770b\u6e90\u7801 (v5.0.0+)"))),(0,r.kt)("p",null,"\u6e05\u7a7a\u6240\u6709\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"noAnimation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u9700\u8981\u52a8\u753b\u8fc7\u6e21")))))}d.isMDXComponent=!0}}]);